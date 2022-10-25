import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  flags: {
    FAST_DEV: true,
  },
  jsxImportSource: "@emotion/react",
  jsxRuntime: "automatic",
  trailingSlash: "always",
};

export default config;
