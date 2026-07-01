import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  // Игнорируем папки сборки и конфиги
  { ignores: ["dist", "node_modules", "coverage", "vite.config.ts", "*.config.js", "*.config.ts"] },

  // Настройки для React (автоопределение версии)
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Базовые JS-правила
  js.configs.recommended,

  // TypeScript-правила
  ...tseslint.configs.recommended,

  // Правила для React и React Hooks
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        // project: "./tsconfig.json", // Убираем, чтобы не было ошибок
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];