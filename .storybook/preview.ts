// .storybook/main.ts
import type { StorybookConfig } from "@storybook/react-webpack5";
// import "../app/globals.css";
import "../stories/button.css"

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(ts|tsx|js|jsx)",
    "../components/**/*.stories.@(ts|tsx|js|jsx)",
  ], // Adjust the path as needed
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
  ],
  framework: "@storybook/react-webpack5",
};

export default config;
