import { useCats } from "../../contexts/cats";

import * as S from "./cats-list.styled";

export const CatsList = () => {
  const { cats, loading } = useCats();

  if (loading) {
    return <span>loading...</span>;
  }

  return (
    <S.Container>
      {cats.map((cat) => (
        <S.Cat key={cat.id}>
          <img src={cat.url} alt="" />
        </S.Cat>
      ))}
    </S.Container>
  );
};
