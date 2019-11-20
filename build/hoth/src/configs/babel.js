module.exports = {
    presets: [
        [
            '@babel/env',
            {
                targets: {
                    browsers: ['last 2 versions'],
                },
            },
        ],
        '@babel/react',
        '@babel/typescript',
    ],
    plugins: [
        '@babel/proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
    ],
};
