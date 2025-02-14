import { createSystem, defineConfig, defineTextStyles } from "@chakra-ui/react";

const DEFAULT_TEXT_STYLES = defineTextStyles({
  h1: {
    value: {
      fontFamily: "Lato",
      fontSize: "96px",
      lineHeight: "112px",
      fontWeight: "300",
      letterSpacing: "-1.5px",
    },
  },
  h2: {
    value: {
      fontFamily: "Lato",
      fontSize: "60px",
      lineHeight: "72px",
      fontWeight: "400",
      letterSpacing: "-0.5px",
    },
  },
  h3: {
    value: {
      fontFamily: "Lato",
      fontSize: "48px",
      lineHeight: "56px",
      fontWeight: "400",
      letterSpacing: "0",
    },
  },
  h4: {
    value: {
      fontFamily: "Lato",
      fontSize: "34px",
      lineHeight: "42px",
      fontWeight: "500",
      letterSpacing: "0.25px",
    },
  },
  h5: {
    value: {
      fontFamily: "Lato",
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: "500",
      letterSpacing: "0",
    },
  },
  h6: {
    value: {
      fontFamily: "Lato",
      fontSize: "20px",
      lineHeight: "32px",
      fontWeight: "500",
      letterSpacing: "0.15px",
    },
  },
  subtitle1: {
    value: {
      fontFamily: "Lato",
      fontSize: "16px",
      lineHeight: "28px",
      fontWeight: "500",
      letterSpacing: "0.15px",
    },
  },
  button1: {
    value: {
      fontFamily: "Lato",
      fontSize: "16px",
      lineHeight: "28px",
      fontWeight: "500",
      letterSpacing: "0.15px",
    },
  },
  subtitle2: {
    value: {
      fontFamily: "Lato",
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: "500",
      letterSpacing: "0.1px",
    },
  },
  button2: {
    value: {
      fontFamily: "Lato",
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: "500",
      letterSpacing: "0.1px",
    },
  },
  body1: {
    value: {
      fontFamily: "Lato",
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "400",
      letterSpacing: "0.15px",
    },
  },
  body2: {
    value: {
      fontFamily: "Lato",
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: "400",
      letterSpacing: "0.15px",
    },
  },
  caption: {
    value: {
      fontFamily: "Lato",
      fontSize: "12px",
      lineHeight: "20px",
      fontWeight: "400",
      letterSpacing: "0.4px",
    },
  },
});

const COMMON_PALETTE = {
  primary: {
    50: { value: "#EBF1FE" },
    100: { value: "#D7E3FD" },
    200: { value: "#B0C6FC" },
    300: { value: "#87A5F6" },
    400: { value: "#6889EE" },
    500: { value: "#395FE3" },
    600: { value: "#2948C3" },
    700: { value: "#1C34A3" },
    800: { value: "#122383" },
    900: { value: "#0A176C" },
  },
  success: {
    50: { value: "#F4FDEC" },
    100: { value: "#E9FCD9" },
    200: { value: "#CEFAB5" },
    300: { value: "#A9F08C" },
    400: { value: "#85E16C" },
    500: { value: "#53CE40" },
    600: { value: "#35B12E" },
    700: { value: "#209423" },
    800: { value: "#14771E" },
    900: { value: "#0C621B" },
  },
  warning: {
    50: { value: "#FEFBE5" },
    100: { value: "#F3EFE1" },
    200: { value: "#FEEE99" },
    300: { value: "#FEE266" },
    400: { value: "#FDD640" },
    500: { value: "#FCC202" },
    600: { value: "#D8A101" },
    700: { value: "#B58201" },
    800: { value: "#926500" },
    900: { value: "#785100" },
  },
  error: {
    50: { value: "#FEF3E8" },
    100: { value: "#FEE8D1" },
    200: { value: "#FECCA4" },
    300: { value: "#FEA877" },
    400: { value: "#FD8655" },
    500: { value: "#FC4E1E" },
    600: { value: "#D83115" },
    700: { value: "#B51A0F" },
    800: { value: "#92090A" },
    900: { value: "#78050E" },
  },
  info: {
    50: { value: "#E9F4FF" },
    100: { value: "#D3E9FF" },
    200: { value: "#A6D1FF" },
    300: { value: "#7AB5FF" },
    400: { value: "#599CFF" },
    500: { value: "#2374FF" },
    600: { value: "#1959DB" },
    700: { value: "#1142B7" },
    800: { value: "#0B2E93" },
    900: { value: "#061F7A" },
  },
};

const lightTheme = defineConfig({
  theme: {
    tokens: {
      colors: {
        ...COMMON_PALETTE,
        neutral: {
          10: { value: "#FFFFFF" },
          50: { value: "#F9FAFB" },
          100: { value: "#F3F4F6" },
          200: { value: "#E5E7EB" },
          300: { value: "#D2D5DA" },
          400: { value: "#9DA3AE" },
          500: { value: "#6C727F" },
          600: { value: "#4D5562" },
          700: { value: "#394150" },
          800: { value: "#212936" },
          900: { value: "#121826" },
        },
      },
    },
    textStyles: DEFAULT_TEXT_STYLES,
  },
});

const darkTheme = defineConfig({
  theme: {
    tokens: {
      colors: {
        ...COMMON_PALETTE,
        neutral: {
          10: { value: "#222630" },
          50: { value: "#2A303C" },
          100: { value: "#F3F4F6" },
          200: { value: "#5A5E68" },
          300: { value: "#71747D" },
          400: { value: "#898C93" },
          500: { value: "#A0A3A8" },
          600: { value: "#B7B9BD" },
          700: { value: "#D0D1D4" },
          800: { value: "#E7E7E9" },
          900: { value: "#FFFFFF" },
        },
      },
    },
    textStyles: DEFAULT_TEXT_STYLES,
  },
});

export const lightThemeSystem = createSystem(lightTheme);
export const darkThemeSystem = createSystem(darkTheme);
