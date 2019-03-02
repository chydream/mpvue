<template>
<div>
  <div class="weui-cells__title">带图标、说明、跳转的列表项</div>
  <div class="weui-cells">
    <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__hd"><i class="fa fa-user" style="margin-right:5px;"></i></div>
        <div class="weui-cell__bd">
            <p>cell standard</p>
        </div>
        <div class="weui-cell__ft">说明文字</div>
    </a>
    <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__hd"><i class="fa fa-user" style="margin-right:5px;"></i></div>
        <div class="weui-cell__bd">
            <p>cell standard</p>
        </div>
        <div class="weui-cell__ft">说明文字</div>
    </a>
    <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__hd"><i class="fa fa-user" style="margin-right:5px;"></i></div>
        <div class="weui-cell__bd">
            <p>cell standard</p>
        </div>
        <div class="weui-cell__ft">说明文字</div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: 'cell',
  props: {
    title: [String, Number],
    value: [String, Number, Array],
    isLink: Boolean,
    isLoading: Boolean,
    inlineDesc: [String, Number],
    primary: {
      type: String,
      default: 'title'
    },
    link: [String, Object],
    valueAlign: [String, Boolean, Number],
    borderIntent: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    arrowDirection: String, // down or up
    alignItems: String
  },
  created () {
  },
  methods: {
  },
  data () {
    return {
      hasTitleSlot: true,
      hasMounted: false
    }
  }
}
</script>

<style lang="less">
</style>
