import { css } from "@emotion/react";
import { GlobalStyles } from "@mui/material";

export const GlobalStyle = () => {
  return (
    <GlobalStyles
      styles={css`
        body {
          margin: 0;
        }
      `}
    />
  );
};
