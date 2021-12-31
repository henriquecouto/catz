import { AppBar, Box, Typography } from "@mui/material";
import * as S from "./navbar.styled";

export const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <S.Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: "flex-end" }}
          >
            Catz
          </Typography>
        </S.Toolbar>
      </AppBar>
    </Box>
  );
};
