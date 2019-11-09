const path = require("path");

module.exports = {
    entry: "./examples/src/index.tsx",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            "@ipno/react-lang": path.join(__dirname, "./src")
        }
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "examples/public/assets/js")
    },
    devServer: {
        contentBase: path.resolve(__dirname, "examples/public"),
        compress: true,
        port: 9000,
        index: path.resolve(__dirname, "examples/public/index.html"),
        writeToDisk: true
    }
};
