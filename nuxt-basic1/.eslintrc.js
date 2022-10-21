// .eslintrc.js
module.exports = {
    root: true,
    extends: [
      'eslint:recommended',
      'plugin:vue/essential',
      'prettier',
      'plugin:prettier/recommended',
    ],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          useTabs: true,
          trailingComma: 'all',
          printWidth: 80,
          bracketSpacing: true,
          arrowParens: 'avoid',
        },
      ],
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  };