import Vuex from 'vuex'
import Vuextest from './modules/vuextest'

// 是否是测试环境
const isDebug = process.env.NODE_ENV !== 'production'

export default new Vuex.createStore({
  modules: {
    Vuextest
  },
  strict: isDebug,
  plugins: []
})
