import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider
      children={children}
      value={theme}
    />
  );
}
