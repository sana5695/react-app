import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./BuildPlugins";
import {buildLoaders} from "./BuildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;

    return {
        mode: mode,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        entry: paths.entry,
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}

