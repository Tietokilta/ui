module.exports = {
  stories: ["../lib/**/*.stories.mdx", "../lib/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      postcssLoaderOptions: {
        implementation: require("postcss")
      }
    }
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite"
  },
  features: {
    storyStoreV7: true
  },
  typescript: {
    check: true
  }
};
