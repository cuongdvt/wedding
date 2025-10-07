import pluginJs from '@eslint/js';
import eslintNext from '@next/eslint-plugin-next';
import stylistic from '@stylistic/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import noRalativeImportsPath from 'eslint-plugin-no-relative-import-paths';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
  },
  {
    ignores: [
      'eslint.config.mjs',
      'postcss.config.mjs',
      'dist/*',
      '.next',
      '.cache',
      'public',
      'next-env.d.ts',
      'next.config.ts',
      'yarn.lock',
      'node_modules/*',
      'tailwind.config.ts',
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        parser: typescriptParser,
        sourceType: 'module',
        projectService: true,
        tsconfigRootDir: import.meta.name,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      'no-relative-import-paths': noRalativeImportsPath,
      'unused-imports': unusedImports,
      '@stylistic': stylistic,
      react: eslintReact,
      'react-hooks': eslintReactHooks,
      '@next/next': eslintNext,
    },
    rules: {
      ...eslintReact.configs['jsx-runtime'].rules,
      ...eslintReactHooks.configs.recommended.rules,
      ...eslintNext.configs.recommended.rules,
      ...eslintNext.configs['core-web-vitals'].rules,
      '@next/next/no-img-element': 'error',
      'react/jsx-fragments': ['warn', 'syntax'],
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['ts', 'tsx'],
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      semi: 'off',
      '@stylistic/semi': ['error'],
      radix: ['error', 'always'],
      curly: 1,
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      'ordered-imports': [0],
      'object-literal-sort-keys': [0],
      'new-parens': 1,
      'no-bitwise': 1,
      'no-cond-assign': 1,
      'no-trailing-spaces': 0,
      'eol-last': 1,
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'no-var': 2,
      'no-void': ['error', { allowAsStatement: true }],
      'no-relative-import-paths/no-relative-import-paths': ['error', { allowSameFolder: false, rootDir: 'src', prefix: '@' }],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['error', { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "args": "all",
          "argsIgnorePattern": "^_",
          "caughtErrors": "all",
          "caughtErrorsIgnorePattern": "^_",
          "destructuredArrayIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "ignoreRestSiblings": true
        }
      ],
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      'react/jsx-no-literals': 'off'
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];