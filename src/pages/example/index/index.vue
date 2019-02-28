<template>
    <view class="page">
        <view class="page__hd">
            <view class="page__title">WeUI</view>
            <view class="page__desc">WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。</view>
        </view>
        <view class="page__bd page__bd_spacing">
            <view class="kind-list">
                <block v-for="(item,index) in list" :key="index">
                    <view class="kind-list__item">
                        <view id="item.id" class="weui-flex kind-list__item-hd" bindtap="kindToggle" :class="{'kind-list__item-hd_show':item.open}">
                            <view class="weui-flex__item">{{item.name}}</view>
                            <image class="kind-list__img" src="images/icon_nav_form.png"></image>
                        </view>
                        <view class="kind-list__item-bd" :class="{'kind-list__item-hd_show':item.open}">
                            <view class="weui-cells" :class="{'weui-cells_show':item.open}">
                                <block v-for="(page,i) in item.pages" :key="i">
                                    <navigator url="page/page" class="weui-cell weui-cell_access">
                                        <view class="weui-cell__bd">{{page}}</view>
                                        <view class="weui-cell__ft weui-cell__ft_in-access"></view>
                                    </navigator>
                                </block>
                            </view>
                        </view>
                    </view>
                </block>
            </view>
        </view>
        <view class="page__ft">
            <image src="images/icon_footer.png" style="width: 84px; height: 19px;"></image>
        </view>
    </view>
</template>
<script>
export default {
  data () {
      return {
          list: [
            {
                id: 'form',
                name: '表单',
                open: false,
                pages: ['button', 'list', 'input', 'slider', 'uploader']
            },
            {
                id: 'widget',
                name: '基础组件',
                open: false,
                pages: ['article', 'badge', 'flex', 'footer', 'gallery', 'grid', 'icons', 'loadmore', 'panel', 'preview', 'progress']
            },
            {
                id: 'feedback',
                name: '操作反馈',
                open: false,
                pages: ['actionsheet', 'dialog', 'msg', 'picker', 'toast']
            },
            {
                id: 'nav',
                name: '导航相关',
                open: false,
                pages: ['navbar', 'tabbar']
            },
            {
                id: 'search',
                name: '搜索相关',
                open: false,
                pages: ['searchbar']
            }
        ]
      }
  }, 
  methods: {
      kindToggle: function (e) {
        var id = e.currentTarget.id
        var list = this.data.list
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open
            } else {
                list[i].open = false
            }
        }
    }
  }
}
</script>
<style>
@import url("./index.css");
</style>
