module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: true,
    extraFileExtensions: ['.vue']
  },
  rules: {
    '@typescript-eslint/no-parameter-properties': 'never',
    '@typescript-eslint/explicit-function-return-type': 'never',
    '@typescript-eslint/interface-name-prefix': 'never'
  }
};
