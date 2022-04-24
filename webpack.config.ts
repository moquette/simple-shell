import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import {TsconfigPathsPlugin} from 'tsconfig-paths-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack, {Configuration} from 'webpack'
import devServer from 'webpack-dev-server'
import path from 'path'

// const
const mode = process.env.NODE_ENV ?? 'production'
const isProd = mode === 'production'
const isDev = !isProd
const port = 3000

// utils
const arrayFilterEmpty = (array) => array.filter((x) => !!x)
const fileName = (ext) => `[name].[contenthash].${ext}`

// Plugins
const reactRefreshPlugin = new ReactRefreshWebpackPlugin()
const forkTsCheckerWebpackPlugin = new ForkTsCheckerWebpackPlugin({
  async: isDev,
  typescript: {
    configFile: path.resolve(__dirname, 'tsconfig.json'),
  },
})
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src/index.html'),
  minify: {
    removeComments: isProd,
    collapseWhitespace: isProd,
  },
})

//rules
const cssRule = {
  test: /\.s?css$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [['postcss-preset-env']],
        },
      },
    },
  ],
}

const svgReactComponentRule = {
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  issuer: /\.[jt]sx$/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        babel: false,
        icon: true,
      },
    },
  ],
}
/**
 * Using file-loader for handling svg files
 * @see https://webpack.js.org/guides/asset-modules/
 */
const svgRule = {
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  issuer: {not: [/\.[jt]sx$/]},
  type: 'asset/inline',
}
/**
 * @see https://webpack.js.org/guides/typescript/#loader
 */
const typescriptRule = {
  test: /\.tsx?$/,
  loader: 'ts-loader',
  options: {
    transpileOnly: true,
  },
  exclude: /dist/,
}
/**
 * @see https://webpack.js.org/guides/asset-modules/
 */
const imagesRule = {
  test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
  type: 'asset/resource',
  parser: {
    dataUrlCondition: {
      maxSize: 10000,
    },
  },
}
/**
 * @see https://webpack.js.org/guides/asset-modules/
 */
const fontsRule = {
  test: /\.(woff(2)?|eot|ttf|otf|)$/,
  type: 'asset/resource',
}

export default {
  mode: isProd ? 'production' : 'development',
  target: isProd ? ['web', 'es5'] : 'web',
  context: path.resolve(__dirname, 'src'),

  entry: isProd
    ? ['./index.tsx']
    : [path.resolve(__dirname, './cleanOnHMR.js'), './index.tsx'],

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  output: {
    publicPath: '/',
    filename: fileName('js'),
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      typescriptRule,
      cssRule,
      imagesRule,
      fontsRule,
      svgReactComponentRule,
      svgRule,
    ],
  },

  plugins: arrayFilterEmpty([
    isDev && new ReactRefreshWebpackPlugin(),
    htmlWebpackPlugin,
    forkTsCheckerWebpackPlugin,
  ]),

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  devtool: isDev ? 'eval-source-map' : 'source-map',
  devServer: {
    client: {
      overlay: false,
    },
    headers: {'Access-Control-Allow-Origin': '*'},
    historyApiFallback: true,
    hot: true,
    open: true,
    port,
  },
}
