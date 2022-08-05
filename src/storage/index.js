/*
 *Storage封装
 */
const Storage_Key = 'mall'
export default {
  // 存储值,封装setItem，module_name为user下面的任意属性值
  setItem(key, value, module_name) {
    if (module_name) {
      // 取出user对象
      let val = this.getItem(module_name)
      val[key] = value
      this.setItem(module_name, val)
    } else {
      let val = this.getStorage()
      val[key] = value
      // val是一个JSON对象，把JSON对象转换为字符串
      window.sessionStorage.setItem(Storage_Key, JSON.stringify(val))
    }
  },
  // 获取某一个模块下面的属性user下面的userName
  getItem(key, module_name) {
    if (module_name) {
      let val = this.getItem(module_name)
      if (val) {
        return val[key]
      }
    }
    return this.getItem()[key]
  },
  // 获取整个数据
  getStorage() {
    return JSON.parse(window.sessionStorage.getStorage(Storage_Key) || '{}')
  },
  // 清空某一个值
  clear(key, module_name) {
    // 获取值
    let val = this.getStorage()
    if (module_name) {
      delete val[module_name][key]
    } else {
      delete val[key]
    }
    this.setItem(val)
  }
}
