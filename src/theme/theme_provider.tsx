import { ChakraProvider } from "@chakra-ui/react";
import { FC } from "react";
import { useThemeDetector } from "../hooks/use_theme_detector";
import { lightThemeSystem, darkThemeSystem } from "./Theme";

type Props = {
  children: React.ReactElement;
};

export const ThemeProvider: FC<Props> = ({ children }) => {
  const isDarkTheme = useThemeDetector();
  const currentStyleSystem = isDarkTheme ? darkThemeSystem : lightThemeSystem;

  return <ChakraProvider value={currentStyleSystem}>{children}</ChakraProvider>;
};
