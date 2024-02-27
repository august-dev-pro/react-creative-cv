const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      // Ajouter un loader pour les fichiers CSS
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    // Ajouter des extensions de fichier résolues
    extensions: [".js", ".jsx"],
  },
  // Configuration du serveur de développement
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    hot: true,
    open: true,
  },
  // Configuration de la génération de source maps
  devtool: "inline-source-map",
};
