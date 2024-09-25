// @ts-check

import eslint from "@eslint/js";
import eslintPluginSvelte from "eslint-plugin-svelte";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginSvelte.configs["flat/recommended"],
);
