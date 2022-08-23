<template>
    <div class="modal" v-show="showModal">
    <!-- 遮罩层 -->
    <div class="mask"></div>
    <!-- 弹窗 -->
    <div class="modal-dialog">
      <div class="modal-header">
        <span>
          标题
          <a href="javascript:;" class="icon-close iconfont">&#xed1e;</a>
        </span>
      </div>
      <div class="modal-body">
        <!-- 动态实现-使用slot插槽 -->
        商品添加成功！
        <!-- <slot name="body></slot> -->
      </div>
      <div class="modal-footer">
        <div class="btn-group">
          <a href="javascript:;" class="btn">确定</a>
          <a href="javascript:;" class="btn">取消</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    // 弹窗类型：小，中，大，表单
    modalType: {
      type: String,
      // 默认值
      default: 'form'
    },
    // 弹框标题
    title: String,
    // 按钮类型：1：确定按钮 2：取消按钮 3：确定取消
    btnType: String,
    sureText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showModal: Boolean
  }
}
</script>
<style lang="scss">
  @import "./../assets/scss/mixin.scss";
  @import"./../assets/scss/modal.scss";
</style>
