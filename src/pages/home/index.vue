<template>
    <div class="home">
        {{msg}}{{isCollapse}}<i class="fa fa-address-book"></i>{{filePath}}
        <button @click="showAlert">按钮dd</button>
        <x-button type="primary" mini :disabled="true" plain>dddd</x-button>
        <flexbox>
            <flexbox-item><div class="flex-demo">1</div></flexbox-item>
            <flexbox-item><div class="flex-demo">2</div></flexbox-item>
        </flexbox>
        <icon type="success" size="40" />
        <button type="warn">dddd</button>
        <view class="page__bd page__bd_spacing">
            <view class="weui-flex">
                <view class="weui-flex__item"><view class="placeholder">weui</view></view>
            </view>
            <view class="weui-flex">
                <view class="weui-flex__item"><view class="placeholder">weui</view></view>
                <view class="weui-flex__item"><view class="placeholder">weui</view></view>
            </view>
            <view class="weui-flex">
                <view class="weui-flex__item"><view class="placeholder">weui</view></view>
                <view class="weui-flex__item"><view class="placeholder">weui</view></view>
                <view class="weui-flex__item"><view class="placeholder">weui</view></view>
            </view>
            <view class="weui-flex">
                <view class="weui-flex__item"><view class="placeholder">weui</view></view>
                <view class="weui-flex__item"><view class="placeholder">weui</view></view>
                <view class="weui-flex__item"><view class="placeholder">weui</view></view>
                <view class="weui-flex__item"><view class="placeholder">weui</view></view>
            </view>
            <view class="weui-flex">
                <view><view class="placeholder">weui</view></view>
                <view class="weui-flex__item"><view class="placeholder">weui</view></view>
                <view><view class="placeholder">weui</view></view>
            </view>
        </view>
        <progress percent="20" show-info />
        <view class="page">
            <view class="page__bd">
                <view class="weui-grids">
                    <block>
                        <navigator url="" class="weui-grid" hover-class="weui-grid_active">
                            <image class="weui-grid__icon" />
                            <view class="weui-grid__label">Grid</view>
                        </navigator>
                    </block>
                    <block>
                        <navigator url="" class="weui-grid" hover-class="weui-grid_active">
                            <image class="weui-grid__icon" />
                            <view class="weui-grid__label">Grid</view>
                        </navigator>
                    </block>
                    <block>
                        <navigator url="" class="weui-grid" hover-class="weui-grid_active">
                            <image class="weui-grid__icon" />
                            <view class="weui-grid__label">Grid</view>
                        </navigator>
                    </block>
                    <block>
                        <navigator url="" class="weui-grid" hover-class="weui-grid_active">
                            <image class="weui-grid__icon" />
                            <view class="weui-grid__label">Grid</view>
                        </navigator>
                    </block>
                </view>
            </view>
        </view>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import XButton from '@/components/weui/x-button/index'
import Flexbox from '@/components/weui/flexbox/flexbox'
import FlexboxItem from '@/components/weui/flexbox/flexbox-item'
export default {
    components: {
        XButton,
        Flexbox,
        FlexboxItem
    },
    data () {
        return {
            msg: 'hello'
        }
    },
    computed: {
        ...mapGetters(['isCollapse'])
    },
    methods: {
        showAlert () {
        }
    }
}
</script>
<style lang="scss" scoped>
/* .home{
    background:red; 
    } */
@import url("./style.scss");
.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}
</style>
