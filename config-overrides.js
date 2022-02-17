module.exports = function override (config) {
  const paths = require('./node_modules/react-scripts/config/paths');
  const loaders = config.module.rules[1].oneOf;

  loaders.splice(2, 1, {
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    include: paths.appSrc,
    loader: require.resolve('esbuild-loader'),
    options: {
      loader: 'tsx',
      target: 'es2015',
    },
  });

  return config;
};
