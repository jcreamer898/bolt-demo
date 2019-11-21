module.exports = {
    resolver: require.resolve('./jest/resolver.js'),
    testPathIgnorePatterns: ['dist'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': require.resolve('./jest/transformer.js'),
    },
};
