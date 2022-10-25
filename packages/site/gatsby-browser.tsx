import { CssVarsProvider } from "@mui/joy/styles";
import type { GatsbyBrowser } from "gatsby";

import defaultTheme from "./src/styles/defaultTheme";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  return <CssVarsProvider theme={defaultTheme}>{element}</CssVarsProvider>;
};
