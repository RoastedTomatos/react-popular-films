module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module', 
    ecmaFeatures: {
      jsx: true 
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime/extends',
    'plugin:react-hooks/recommended', 
    'plugin:redux-saga/recommended', 
    'plugin:jsx-a11y/recommended', 
    'plugin:prettier/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'redux-saga',
    'jsx-a11y',
    'prettier'
  ],
  rules: {

  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
