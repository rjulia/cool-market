module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-no-bind': [
      'off',
    ],
    semi: [2, 'never'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'max-len': ['error', {
      code: 144,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'no-console': 'off',
    'react/no-did-update-set-state': 'warn',
    'react/no-unknown-property': 'warn',
    'react/no-unused-prop-types': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'error',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
  },
}
