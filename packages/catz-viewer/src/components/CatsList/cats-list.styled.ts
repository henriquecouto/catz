import { Box, Paper, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: window.innerWidth,
}));

export const Cat = styled(Box)(({ theme }) => ({
  width: window.innerWidth,

  "& > img": {
    width: `calc(100% - ${theme.spacing(2)})`,
    padding: theme.spacing(1),
  },
}));
