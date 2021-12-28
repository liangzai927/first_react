/* craco.config.js */
const CracoLessPlugin = require('craco-less'); //配置主题颜色


module.exports = {
  babel: {
    plugins: [['import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true, //改为true则是less 修改主题一定要改为true
    }]],
  },
  // 修改主题配置
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};