const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
    configFile: './babel.config.js',
});
