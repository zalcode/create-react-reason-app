const reactHotReloadPlugin = require("craco-plugin-react-hot-reload");

module.exports = {
  plugins: [
    {
      plugin: reactHotReloadPlugin
    }
  ],
  eslint: {
    enable: false
  },
  webpack: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    },
  }
};
