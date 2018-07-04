module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: ['eslint:recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    'max-len': [1, 120, 2, {
      ignoreComments: true
    }],
    'no-console': 0,
    indent: [2, 2],
    quotes: [2, 'single'],
    semi: [2, 'always'],
    'eol-last': [2, 'always'],
    'no-trailing-spaces': 'error'
  } 
}
