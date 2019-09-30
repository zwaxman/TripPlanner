const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  // watch: true,
};
