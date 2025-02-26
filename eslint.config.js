import globals from "globals";
import tslint from "typescript-eslint";
import react from "eslint-plugin-react";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["**/*.test.js", "**/*.d.{ts,js}", "**/vite.config.ts"],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tslint.configs.recommended,
  react.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.node,
        myCustomGlobal: "readonly",
      },
    },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      // "react/jsx-uses-vars": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "no-undef": "error",
      "array-callback-return": "warn",
      "no-await-in-loop": "error",
      "no-duplicate-imports": "error",
      // "no-use-before-define": "error",
      "no-useless-assignment": "error",
      "arrow-body-style": ["error", "as-needed"],
      "default-case": "error",
      // "dot-notation": ["error", { allowKeywords: false }],
      eqeqeq: ["error", "always"],
      "max-lines": [
        "warn",
        { max: 1000, skipBlankLines: false, skipComments: false },
      ],
      "no-console": ["warn", { allow: ["info", "warn", "error"] }],
      "no-else-return": "error",
      "no-empty-function": "warn",
      "no-extend-native": "error",
      "no-implicit-coercion": "error",
      "no-label-var": "error",
      "no-lone-blocks": "error",
      "no-loop-func": "error",
      "no-nested-ternary": "error",
      "no-negated-condition": "error",
      "no-regex-spaces": "error",
      "no-useless-rename": "error",
      "no-var": "error",
      "no-warning-comments": [
        "warn",
        { terms: ["TODO", "fix", "fixme", "discuss"], location: "anywhere" },
      ],
      "one-var": ["warn", { let: "always", const: "never" }],
      "prefer-const": "error",
      "prefer-arrow-callback": "error",
      "prefer-numeric-literals": "error",
      "prefer-object-spread": "error",
      "prefer-template": "error",
      "no-useless-concat": "error",
      "require-await": "error",
      yoda: "error",
    },
  },
];
