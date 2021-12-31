import { styled, Toolbar as MuiToolbar } from "@mui/material";
import catImage from "../../assets/cat.jpg";

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  background: `url(${catImage}) no-repeat center`,
  backgroundSize: "100%",

  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));
