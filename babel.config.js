module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
      'import',
      {
          libraryName: 'vant',
          libraryDIrectory: 'es',
          style: true
      }
  ]
}
