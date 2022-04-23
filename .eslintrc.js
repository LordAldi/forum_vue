module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  rules: {
    'no-unused-vars': 'error',
    'space-before-function-paren': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }]
  },

  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
    '@vue/standard'
  ]
}
