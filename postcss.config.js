module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue:37.5,
      propList: ['*','!font*'],// !不匹配属性（这里是字体相关属性不转换）
      unitPrecision: 3, // 最小精度，小数点位数
      minPixelValue: 2 // 替换的最小像素值
    }
  }
}
