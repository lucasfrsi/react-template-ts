const isDevelopment = process.env.NODE_ENV !== 'production';

const presets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage',
      corejs: '3.22.3',
    },
  ],
  '@babel/preset-typescript',
  '@babel/preset-react',
];

const plugins = [
  [
    'babel-plugin-styled-components',
    {
      ssr: false,
      displayName: isDevelopment,
      minify: !isDevelopment,
      transpileTemplateLiterals: !isDevelopment,
    },
  ],
];

module.exports = { presets, plugins };
