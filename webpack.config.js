module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: "./dist/",
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
          {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
          },
          {
            test: /\.css$/,
            loader: "style-loader!css-loader"
          },
      ]
    }
};
