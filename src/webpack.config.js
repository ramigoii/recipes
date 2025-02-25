const path = require("path");

module.exports = {
    mode: "development", // Add this to avoid warnings
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Match all .js files
                exclude: /node_modules/, // Ignore node_modules
                use: {
                    loader: "babel-loader" // CORRECT loader name
                }
            }
        ]
    }
    devtool: "#source-map" // Add this option for source mapping
};
