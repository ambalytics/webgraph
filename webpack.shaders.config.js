let path = require('path');
let glob = require('glob');

const shaders = glob.sync(
  path.join(__dirname, 'src', 'WebGraph', 'WebGL', 'Shader', '*.glsl')
);

const entry = {};

shaders.forEach(function (p) {
  entry[path.basename(p, '.glsl')] = p;
});

module.exports = {
  mode: 'production',
  entry,
  output: {
    path: path.join(__dirname, 'lib', 'WebGraph', 'WebGL', 'Shader'),
    filename: '[name].glsl.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.glsl$/,
        loader: 'raw-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
