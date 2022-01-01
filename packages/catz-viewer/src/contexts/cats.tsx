import {
  createContext,
  Dispatch,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Cat } from "../@types/cat";
import { CatsService } from "../services/cats-api";

type CatsContext = {
  cats: Array<Cat>;
  loading: boolean;
  setCategory: Dispatch<(prevState: any) => any>;
};

const catsContext = createContext<CatsContext>({} as CatsContext);

export const CatsProvider: FC = ({ children }) => {
  const [category, setCategory] = useState();
  const [cats, setCats] = useState<Array<Cat>>([]);
  const [loading, setLoading] = useState(false);

  const loadCats = useCallback(async () => {
    setLoading(true);
    try {
      if (category) {
        const { data } = await CatsService.get(
          `/images/search?limit=30&categories_id=[${category}]`
        );
        setCats(data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    loadCats();
  }, [loadCats]);

  return (
    <catsContext.Provider value={{ cats, loading, setCategory }}>
      {children}
    </catsContext.Provider>
  );
};

export const useCats = () => useContext(catsContext);
