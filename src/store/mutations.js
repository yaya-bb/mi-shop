/*
 * 商城Vuex-mutations，用于读取
 */
export default {
  saveUserName(state, username) {
    state.userName = username
    // 下一步到指定的vue进行读取渲染数据，此处到navheader进行渲染数据
  },
  saveCartCount(state, count) {
    state.cartCount = count
    // 下一步到指定的vue进行读取渲染数据，此处到navheader进行渲染数据
  }
}
