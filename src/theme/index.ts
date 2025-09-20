import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {},
});

const theme = createSystem(defaultConfig, config);

export default theme;
