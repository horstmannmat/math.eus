module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react-refresh'],
  extends: [
    'airbnb-typescript/base',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { 
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json'
  },
  rules: {
    'react-refresh/only-export-components': 'warn',
    'semi': 'warn'
  },
};
