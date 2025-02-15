import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider as ChakraThemeProvider } from "next-themes";
import { FC } from "react";

import { lightThemeSystem, darkThemeSystem } from "./theme";
import { useThemeDetector } from "../hooks/use_theme_detector";

type Props = {
  children: React.ReactElement;
};

export const ThemeProvider: FC<Props> = ({ children }) => {
  const isDarkTheme = useThemeDetector();
  const currentStyleSystem = isDarkTheme ? darkThemeSystem : lightThemeSystem;
  return (
    <ChakraProvider value={currentStyleSystem}>
      <ChakraThemeProvider attribute="class" disableTransitionOnChange>
        {children}
      </ChakraThemeProvider>
    </ChakraProvider>
  );
};
