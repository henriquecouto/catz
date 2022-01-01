import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Category } from "../@types/category";
import { CatsService } from "../services/cats-api";

type CategoriesContext = {
  categories: Array<Category>;
  loading: boolean;
};

const categoriesContext = createContext<CategoriesContext>(
  {} as CategoriesContext
);

export const CategoriesProvider: FC = ({ children }) => {
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [loading, setLoading] = useState(false);

  const loadCategories = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await CatsService.get("/categories");
      setCategories(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <categoriesContext.Provider value={{ categories, loading }}>
      {children}
    </categoriesContext.Provider>
  );
};

export const useCategories = () => useContext(categoriesContext);
