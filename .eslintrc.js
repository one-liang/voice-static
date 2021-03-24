module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-console': 0,
    'vue/no-v-html': 0,
    'vue/return-in-computed-property': [
      'error',
      {
        treatUndefinedAsUnspecified: true
      }
    ]
  }
}
