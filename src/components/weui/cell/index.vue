<template>
<div>
  <div class="weui-item">
    <div class="weui-cells__title">{{text}}</div>
    <!-- <div class="weui-cells">
      <a class="weui-cell weui-cell_access" href="javascript:;" v-for="(item,index) in items" :key="index">
          <div class="weui-cell__hd"><i class="item.icon" style="margin-right:5px;"></i></div>
          <div class="weui-cell__bd">
              <p>{{item.title}}</p>
          </div>
          <div class="weui-cell__ft">{{item.remark}}</div>
      </a>
    </div> -->
  </div>
</div>
</template>

<script>
export default {
  name: 'cell',
  props: ['text'],
  // props: {
  //   items: {
  //     type: Array,
  //     default: () => {
  //       return []
  //     }
  //   },
  //   title: {
  //     type: String,
  //     default: ''
  //   },
  //   isShowTitle: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  created () {
    console.log(this.data)
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
