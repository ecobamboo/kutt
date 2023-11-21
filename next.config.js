const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://ecobamboo.cz',
        permanent: true,
      },
    ]
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  }
};
