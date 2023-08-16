module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    commonjs: true,
    es2023: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname
  },
  ignorePatterns: ['dist'],
  rules: {
    '@typescript-eslint/quotes': ['error', 'single']
  }
}
