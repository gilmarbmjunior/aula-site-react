import { colors } from "@/colors";
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: colors,
    },
  },
});

const theme = createSystem(defaultConfig, config);

export default theme;
