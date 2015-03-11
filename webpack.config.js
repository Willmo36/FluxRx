module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "./dist/app.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};