module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    'indent': ['error', 2 ],
    'linebreak-style': ['error', 'unix'],
    'no-console': 'warn',
    'no-param-reassign': 'error',
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'semi': ['error', 'always'],
    'space-before-function-paren': 'off',
    'vars-on-top': 'off',
  }
};
