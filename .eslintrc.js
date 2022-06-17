module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    env: {
        node: true,
        jest: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint/eslint-plugin'],
    'settings': {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.js', '.json'],
        },
        'import/resolver': {
            'typescript': {
                'alwaysTryTypes': false,
            },
        },
    },
    // 'ignorePatterns': [
    //     '/.idea',
    //     '*eslintrc.js',
    //     '*package.json',
    //     '*package-lock.json'
    // ],
    'rules': {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
    'overrides': [
        {
            'files': ['*.js'],
            'rules': {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
}
