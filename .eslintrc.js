module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'react'
  ],
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'import/no-dynamic-require': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-use-before-define": ["error", { "functions": false,}],
    "no-unused-vars": 0,
    "no-unneeded-ternary": 0,
    "no-console": 0,
    "no-underscore-dangle": 0,
    "arrow-parens": 0,
    "arrow-body-style": 0,
    "no-param-reassign": 0,
    "no-unused-expressions": 0,
    "padded-blocks": 0,
    "prefer-const": 1,
    "linebreak-style":0,
    "max-len":0,
    "array-callback-return": 0,
    "class-methods-use-this": 0,
    "no-useless-return": 0,
    "consistent-return": 0,
  },
  "env": {
      "browser": true
  },
  "globals": {
  },
}
