module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react', '@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: 'tsconfig.json',
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.9',
    },
  },
  rules: {
    'react/prop-types': 0,
  },
};
