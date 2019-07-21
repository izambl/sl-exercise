const babelConfig = (api) => {
  api.cache(true);

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
  ];

  return {
    presets,
  };
};

module.exports = babelConfig;
