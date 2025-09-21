import { generateColorScale } from "@/colors/generated_colors";
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: generateColorScale(
        [
          { hex: "#ef4444", name: "red" },
          { hex: "#f97316", name: "orange" },
          { hex: "#f59e0b", name: "amber" },
          { hex: "#eab308", name: "yellow" },
          { hex: "#84cc16", name: "lime" },
          { hex: "#22c55e", name: "green" },
          { hex: "#10b981", name: "emerald" },
          { hex: "#14b8a6", name: "teal" },
          { hex: "#06b6d4", name: "cyan" },
          { hex: "#0ea5e9", name: "sky" },
          { hex: "#3b82f6", name: "blue" },
          { hex: "#6366f1", name: "indigo" },
          { hex: "#8b5cf6", name: "violet" },
          { hex: "#a855f7", name: "purple" },
          { hex: "#d946ef", name: "fuchsia" },
          { hex: "#ec4899", name: "pink" },
          { hex: "#f43f5e", name: "rose" },
          { hex: "#78716c", name: "stone" },
          { hex: "#737373", name: "natural" },
          { hex: "#71717a", name: "zinc" },
          { hex: "#6b7280", name: "gray" },
          { hex: "#64748b", name: "slate" },
        ],
        10
      ),
    },
  },
});

const theme = createSystem(defaultConfig, config);

export default theme;
