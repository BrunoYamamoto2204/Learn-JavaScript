const path = require("path");

module.exports ={
    mode:"production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public","assests","js"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            exclude: /node_modules/, 
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env"]
                }
            }
        }]
    },
    devtool: "source-map"
}