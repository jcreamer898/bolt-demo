'use strict';

let createResolve = require('jest-enhanced-resolve').default;

let resolve = createResolve({
    mainFields: ['rebels:source', 'main'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
});

function resolver(modulePath, opts) {
    return resolve(modulePath, opts);
}

module.exports = resolver;
