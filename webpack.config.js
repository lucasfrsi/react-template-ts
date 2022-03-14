const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = () => {
  const config = {
    entry: path.join(__dirname, 'src', 'index.tsx'),

    output: {
      path: path.join(__dirname, 'build'),
      publicPath: '/',
      filename: 'static/js/[name].[contenthash].js',
      chunkFilename: 'static/js/[name].[contenthash].chunk.js',
      assetModuleFilename: 'static/assets/[contenthash:8][ext]',
      clean: true,
    },

    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          include: path.join(__dirname, 'src'),
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|ico|ttf)$/i,
          type: 'asset/resource',
        },
      ],
    },

    resolve: {
      alias: {
        assets: path.join(__dirname, 'src', 'app', 'assets'),
        components: path.join(__dirname, 'src', 'app', 'components'),
        hooks: path.join(__dirname, 'src', 'app', 'hooks'),
        pages: path.join(__dirname, 'src', 'app', 'pages'),
        lib: path.join(__dirname, 'src', 'lib'),
        locales: path.join(__dirname, 'src', 'locales'),
        services: path.join(__dirname, 'src', 'services'),
        store: path.join(__dirname, 'src', 'store'),
        styles: path.join(__dirname, 'src', 'styles'),
        utils: path.join(__dirname, 'src', 'utils'),
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },

    optimization: {
      runtimeChunk: 'single',
      moduleIds: 'deterministic',
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendors',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
          },
        },
      },
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: '',
      }),
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          diagnosticOptions: {
            semantic: true,
            syntactic: true,
          },
          mode: 'write-references',
        },
      }),
    ],
  };

  const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';

  if (!IS_DEVELOPMENT) {
    config.plugins.push(new CompressionPlugin());

    config.performance = {
      assetFilter(assetFilename) {
        return assetFilename.endsWith('.gz');
      },
      hints: 'error',
      maxAssetSize: 256000,
      maxEntrypointSize: 256000,
    };

    config.stats = {
      all: false,
      assets: true,
      builtAt: true,
      errors: true,
      errorDetails: true,
      errorStack: true,
      errorsCount: true,
      warnings: true,
      warningsCount: true,
      hash: true,
      logging: 'info',
      loggingTrace: true,
      optimizationBailout: true,
      performance: true,
      relatedAssets: true,
      version: true,
    };
  }

  if (IS_DEVELOPMENT) {
    config.performance = false;
    config.stats = 'minimal';

    config.devServer = {
      hot: true,
      historyApiFallback: true,
      client: {
        logging: 'warn',
      },
    };

    const babelLoader = config.module.rules[0];
    babelLoader.use.options = {
      plugins: ['react-refresh/babel'],
    };

    config.plugins.push(new ReactRefreshWebpackPlugin());
    // ForkTsCheckerWebpackPlugin only in DEV?

    config.devtool = 'eval-source-map';
  }

  return config;
};
