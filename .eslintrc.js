module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ["import", '@typescript-eslint', 'react', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'next/core-web-vitals',
    'prettier',
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "project": "./tsconfig.json",
        "alwaysTryTypes": true,
      },
      "alias": {
        "map": [
          [
            "@",
            "./src"
          ]
        ],
        "extensions": [
          ".js",
          ".ts",
          ".tsx",
          ".jsx",
          ".json"
        ]
      },
    },
  },

  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars-experimental": "error",
    "import/no-unresolved": "warning",
    'react/react-in-jsx-scope': 0,
    'prettier/prettier': 2,
    '@typescript-eslint/no-non-null-assertion': 0,
    'import/default': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'import/order': [
      2,
      {
        groups: ['external', 'builtin', 'index', 'sibling', 'parent', 'internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always-and-inside-groups',
      },
    ],
  },
}
