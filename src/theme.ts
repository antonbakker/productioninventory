// src/theme.ts
import { createTheme } from "@aws-amplify/ui-react";

export const theme = createTheme({
  name: "app-theme",
  tokens: {
    colors: {
      brand: {
        primary: {
          10: { value: "#f5f8ff" },
          20: { value: "#ebf1ff" },
          40: { value: "#d6e3ff" },
          60: { value: "#2c62ea" },
          80: { value: "#1e44a3" },
          90: { value: "#142c6b" },
          100: { value: "#0a1535" },
        },
      },
    },
    components: {
      card: {
        backgroundColor: { value: "{colors.background.primary}" },
        borderRadius: { value: "{radii.medium}" },
        padding: { value: "{space.medium}" },
      },
      table: {
        header: {
          color: { value: "{colors.brand.primary.80}" },
        },
      },
    },
  },
});
