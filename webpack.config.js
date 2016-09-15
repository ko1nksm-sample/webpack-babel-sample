const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    bundle: './src/entry.js',
    style: './src/style.js'
  },
  resolve: {
    root: path.resolve(__dirname, './src'),
    extensions: [
      '',
      '.js',
      '.jsx',  // JSX (React) を使用する場合のみ必要
    ],

    modulesDirectories: [
      'node_modules',
      'bower_components', // bowerを使用する場合のみ必要
    ]
  },
  plugins: [
    // bowerパッケージのパス解決（bowerを使用する場合のみ必要）
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),

    // css-loader, sass-loaderで処理したCSSを単体のファイルとして生成するために必要
    new ExtractTextPlugin("[name].css"),

    // externalsにしたファイルを手動でコピーする（CDN等を使う場合は不要）
    new CopyWebpackPlugin([
      { from: 'bower_components/jquery/dist/jquery.min.js' },
      { from: 'node_modules/lodash/lodash.min.js' },
      { from: 'node_modules/moment/min/moment.min.js' },
      { from: 'node_modules/react/dist/react.min.js' },
      { from: 'node_modules/react-dom/dist/react-dom.min.js' },
    ]),

    // minify
    new webpack.optimize.UglifyJsPlugin({
      minimize: true, compress: { warnings: false }
    }),
  ],
  module: {
    exprContextCritical: false, // https://github.com/power-assert-js/babel-plugin-espower/issues/14
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', ['css?sourceMap'])
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', ['css?sourceMap', 'sass?sourceMap'])
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  externals: [  // ビルドで結合しないモジュール
    {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'lodash': '_',
      'moment': 'moment'
    },
    // bowerモジュールはabel-plugin-resolve-bower-module (refer to .babelrc) によって
    // 読み込みパスが変更されるためにコールバック関数で処理する必要がある。
    function (context, request, callback) {
      // console.log(context + ' : ' + request);
      if (request.startsWith(path.resolve('bower_components/jquery/'))) {
        return callback(null, '$')
      }
      callback()
    }
  ],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets',
    filename: '[name].js'
  },
  devServer: {
    contentBase: 'public',
    //inline: true,
    //https: true
  }
}
