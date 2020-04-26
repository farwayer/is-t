const esm = !!process.env.ESM

module.exports = {
  presets: [
    ['@babel/preset-env', {
      bugfixes: true,
      loose: true,
      modules: esm ? false : undefined,
    }],
  ],
}
