
/*
* @author Mackenzie Langhals, Aiden Schneider, Diego Diaz, Job Getzinger
*/
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'web', // Ensure Webpack targets a web environment
};
