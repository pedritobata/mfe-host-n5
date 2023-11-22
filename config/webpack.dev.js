const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  entry: "./src/index.ts",
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      historyApiFallback: true,
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marvels: "marvels@http://localhost:8082/remoteEntry.js",
        expendables: "expendables@http://localhost:8081/remoteEntry.js"
      },
      shared: {
        ...packageJson.dependencies,
        /* react: {
          // react
          singleton: true,
          requiredVersion: packageJson.dependencies["react"],
        },
        "react-dom": {
          // react-dom
          singleton: true,
          requiredVersion: packageJson.dependencies["react-dom"],
        }, */
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
