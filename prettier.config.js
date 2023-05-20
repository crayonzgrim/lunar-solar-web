const options = {
  arrowParens: 'always',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 80,
  trailingComma: 'none',
  bracketSpacing: true,
  plugins: [require('prettier-plugin-tailwindcss')]
};

module.exports = {
  options,
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js'
};
