import { CategoriesList } from "./components/CategoriesList";
import { CatsList } from "./components/CatsList";
import { CategoriesProvider } from "./contexts/categories";
import { CatsProvider } from "./contexts/cats";

const Root = () => {
  return (
    <CategoriesProvider>
      <CatsProvider>
        <CategoriesList />
        <CatsList />
      </CatsProvider>
    </CategoriesProvider>
  );
};

export default Root;
