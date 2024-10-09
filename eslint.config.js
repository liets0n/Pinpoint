import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import hooksPlugin from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

export default [
  { ignores: ['node_modules/', 'dist/', 'build/'] },
  { files: ['**/*.{ts,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  eslintPluginPrettierRecommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  eslintPluginUnicorn.configs['flat/recommended'],
  {
    plugins: {
      'react-hooks': hooksPlugin,
      'react-refresh': reactRefresh
    },
    rules: {
      ...hooksPlugin.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'unicorn/better-regex': 'warn',
      'unicorn/filename-case': [
        'error',
        {
          case: 'camelCase',
          ignore: ['App.tsx', 'vite-env.d.ts']
        }
      ],
      'unicorn/prevent-abbreviations': [
        'error',
        {
          ignore: ['env']
        }
      ],
      'arrow-body-style': [
        'error',
        'as-needed',
        { requireReturnForObjectLiteral: true }
      ],
      'prefer-arrow-callback': 'error'
    }
  }
]
