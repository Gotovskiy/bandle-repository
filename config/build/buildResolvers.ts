import webpack from "webpack"
import { BuildOptions, BuildPaths } from "./types/config"

export function buildResolvers(options: BuildPaths): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.src, "node_modules"],
    mainFiles: ["index"],
    alias: {}
  }
}