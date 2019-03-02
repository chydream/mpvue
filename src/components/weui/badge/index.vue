<template>
  <span class="weui-badge" :class="{'weui-badge_dot':isDot}">{{text}}</span>
</template>

<script>
export default {
  name: 'badge',
    props: {
      text: [String, Number],
      isDot: [Boolean]
    }
  }
</script>

<style lang="less">
.vux-badge {
  display: inline-block;
  text-align: center;
  background: red;
  color: #fff;
  font-size: 12px;
  height: 16px;
  line-height: 16px;
  border-radius: 8px;
  padding: 0 6px;
  background-clip: padding-box;
  vertical-align: middle;
}
.vux-badge-single {
  padding: 0;
  width: 16px;
}
.vux-badge-dot {
  height: auto;
  padding: 5px
}
</style>
