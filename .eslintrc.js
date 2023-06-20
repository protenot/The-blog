module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  extends: ["eslint:recommended", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-unused-vars": "off",
    "no-dupe-keys": "warn",

    "no-undef": "off",
    "import/prefer-default-export": "off",
  },
  parserOptions: {
    sourceType: "module",
  },
};
