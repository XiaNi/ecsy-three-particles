module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },
  rules: {
    "prettier/prettier": "error",
    "indent": ["error", 2],
    "semi": ["error", "never"],
    "@typescript-eslint/no-explicit-any": "off"
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "prettier"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ]
};