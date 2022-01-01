import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { useCategories } from "../../contexts/categories";
import { useCats } from "../../contexts/cats";

export const CategoriesList = () => {
  const { categories, loading } = useCategories();
  const { setCategory } = useCats();

  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id);

  useEffect(() => {
    setCategory(() => categories[0]?.id);
  }, [categories, setCategory]);

  if (loading) {
    return <span>loading...</span>;
  }

  return (
    <Tabs
      value={selectedCategory}
      onChange={(_event, value) => {
        setSelectedCategory(value);
        setCategory(value);
      }}
      variant="scrollable"
    >
      {categories.map((category) => (
        <Tab key={category.id} value={category.id} label={category.name} />
      ))}
    </Tabs>
  );
};
