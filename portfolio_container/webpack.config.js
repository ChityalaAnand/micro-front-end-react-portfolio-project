const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
// const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3001,
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // <--- this handles CSS
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "containerapp",
      remotes: {
        aboutapp: "aboutapp@http://localhost:8080/remoteEntry.js",
        projectsapp: "projectsapp@http://localhost:3050/remoteEntry.js",
        skillsapp: "skillsapp@http://localhost:3002/remoteEntry.js",
        contactapp: "contactapp@http://localhost:3060/remoteEntry.js",
        experienceapp: "experienceapp@http://localhost:3061/remoteEntry.js",
      },
      shared: {'react': {singleton: true}, "react-dom": {singleton: true}},
    }),
    // new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

