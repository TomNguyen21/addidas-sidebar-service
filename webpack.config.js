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


module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
};