import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  variants: {
    size: {
      lg: { padding: "14px 22px", borderRadius: "8px" },
      md: { padding: "10px 16px", borderRadius: "8px" },
      sm: { padding: "7.5px 10px", borderRadius: "8px" },
    },
  },
});
