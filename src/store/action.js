/*
 * 商城Vuex-actions，用于传输
 */
export default {
  // 保存用户信息,暴露context对象
  saveUserName(context, username) {
    // 调用commit方法,触发commit
    // actions方法定义好，则在相关页面使用dispatch开发此方法
    // 通过commit会调用mutations
    context.commit('saveUserName', username)
  },
  saveCartCount(context, count) {
    // 调用commit方法,触发commit
    // actions方法定义好，则在相关页面使用dispatch开发此方法
    // 通过commit会调用mutations
    context.commit('saveCartCount', count)
  }
}
