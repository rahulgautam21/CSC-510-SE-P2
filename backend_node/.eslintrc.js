module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "plugin:react/recommended",
    "google",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 8,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  parser: "@babel/eslint-parser",
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "off",
    "react/prop-types": "off",
    "require-jsdoc": "off",
    "max-len": "off",
    "no-invalid-this": "off",
    "new-cap": "off",
  },
};
