module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
    commonjs: true,
    node: true,
    jest: true,
  },
  globals: {
    $: true,
  },
  plugins: ['jsx-a11y'],
  extends: ['eslint:recommended', 'react-app', 'react-app/jest'],
  rules: {
    'no-alert': 0,
    'no-console': 0,
  },
};
