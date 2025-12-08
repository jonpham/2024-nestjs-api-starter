// eslint.config.js
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    ignores: ['.eslintrc.js'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
      ecmaVersion: 'latest',
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      // From plugin:@typescript-eslint/recommended, then overridden below as needed.
      // From plugin:prettier/recommended – you will also need eslint-plugin-prettier/eslint-config-prettier installed.
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  prettierRecommended
];
