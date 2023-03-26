module.exports = {
  stories: ["../lib/**/*.mdx", "../lib/**/*.stories.@(js|jsx|ts|tsx)"],
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
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  features: {
    storyStoreV7: true
  },
  typescript: {
    check: true
  },
  docs: {
    autodocs: true
  }
};
