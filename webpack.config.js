// var path = require('path');
// var SRC_DIR = path.join(__dirname, '/client/src');
// var DIST_DIR = path.join(__dirname, '/client/dist');

// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   module : {
//     rules : [
//       {
//         test : /\.jsx?/,
//         // include : SRC_DIR,
//         // loader : 'babel-loader',
//         use: {
//           loader: 'babel-loader',
//         },
//         query: {
//           presets: ["@babel/preset-env", "@babel/preset-react"]
//         }
//       }
//       // {
//       //   test: /\.css$/,
//       //   use: ['style-loader', 'css-loader']
//       // }
//     ]
//   }

// };


// var path = require('path');
// var SRC_DIR = path.join(__dirname, '/client/src');
// var DIST_DIR = path.join(__dirname, '/public/dist');

// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         // include : SRC_DIR,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         }

//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       }
//     ]
//   }
// };


// const zlib = require('zlib');
// const CompressionPlugin = require('compression-webpack-plugin');
// const BrotliPlugin = require('brotli-webpack-plugin');

// module.exports = {
//   entry: __dirname + '/client/src/index.jsx',
//   module: {
//     rules: [
//       {
//         test: [/\.jsx$/],
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-react', '@babel/preset-env']
//           }
//         }
//       }
//     ],

//     output: {
//       filename: 'bundle.js',
//       path: __dirname + '/client/dist'
//     },

//     plugins: [
//       new CompressionPlugin({
//         filename: '[path].gz[query]',
//         algorithm: 'gzip',
//         test: /\.js$|\.css$|\.html$/,
//         threshold: 10240,
//         minRatio: 0.8,
//       }),
//       new BrotliPlugin({
//         filename: '[path].br[query]',
//         test: /\.js$|\.css$|\.html$/,
//         threshold: 10240,
//         minRatio: 0.8,
//       }),
//     ]
//   },


// };

const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');


module.exports = {
  entry: path.resolve(__dirname, 'client/src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};