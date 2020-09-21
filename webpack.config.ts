import { ConfigurationFactory } from "webpack";
import path from "path";
import CopyWebpackPlugin from "copy-webpack-plugin";

const config: ConfigurationFactory = () => {
  return {
    entry: {
      content_scripts: path.join(__dirname, "src", "content_scripts.ts"),
    },
    output: {
      // buildディレクトリにcontent_scripts.jsを吐く
      path: path.join(__dirname, "build"),
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /.ts$/,
          use: "ts-loader",
          exclude: "/node_modules/",
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    plugins: [
      // publicディレクトリにあるファイルをbuildディレクトリにコピーする
      new CopyWebpackPlugin({ patterns: [{ from: "public", to: "." }] }),
    ],
  };
};

export default config;
