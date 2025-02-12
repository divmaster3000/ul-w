import { createSystem, defineConfig } from "@chakra-ui/react";

const lightTheme = defineConfig({
  theme: {
    tokens: {
      colors: {
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
  },
});

const darkTheme = defineConfig({
  theme: {
    tokens: {
      colors: {
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
  },
});

export const lightThemeSystem = createSystem(lightTheme);
export const darkThemeSystem = createSystem(darkTheme);
