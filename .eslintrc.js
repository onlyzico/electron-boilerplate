module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'prettier'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.js'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
