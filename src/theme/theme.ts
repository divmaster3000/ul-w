import {
  createSystem,
  defineConfig,
  mergeConfigs,
  defaultConfig,
} from "@chakra-ui/react";

import { buttonRecipe } from "./button_styles";
import { COMMON_PALETTE, DARK_NEUTRAL, LIGHT_NEUTRAL } from "./color_styles";
import { DEFAULT_TEXT_STYLES } from "./text_styles";

const lightTheme = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
    },
  },
  theme: {
    tokens: {
      colors: {
        ...COMMON_PALETTE,
        neutral: LIGHT_NEUTRAL,
      },
    },
    recipes: {
      button: buttonRecipe,
    },
    textStyles: DEFAULT_TEXT_STYLES,
  },
});

const darkTheme = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
    },
  },
  theme: {
    tokens: {
      colors: {
        ...COMMON_PALETTE,
        neutral: DARK_NEUTRAL,
      },
    },
    recipes: {
      button: buttonRecipe,
    },
    textStyles: DEFAULT_TEXT_STYLES,
  },
});

const lightThemeConfig = mergeConfigs(defaultConfig, lightTheme);
const darkThemeConfig = mergeConfigs(defaultConfig, darkTheme);

export const lightThemeSystem = createSystem(lightThemeConfig);
export const darkThemeSystem = createSystem(darkThemeConfig);
