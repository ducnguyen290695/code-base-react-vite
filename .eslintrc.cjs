module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "newline-before-return": "error",
    "no-unused-vars": "warn",
    "no-console": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "no-restricted-syntax": [
      "error",
      "FunctionExpression",
      "FunctionDeclaration",
    ],
    "no-empty-function": "error",
    "no-empty": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "function", next: "function" },
      { blankLine: "always", prev: "export", next: "*" },
      { blankLine: "always", prev: "directive", next: "*" },
      { blankLine: "always", prev: "*", next: "block-like" },
      { blankLine: "always", prev: "block-like", next: "*" },
      { blankLine: "always", prev: ["case", "default"], next: "*" },
    ],
  },
};
