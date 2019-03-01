<template>
    <div>
        <view class="page">
            <view class="page__hd">
                <view class="page__title">Msg</view>
                <view class="page__desc">提示页</view>
            </view>
            <view class="page__bd">
                <view class="weui-btn-area">
                    <button class="weui-btn" type="default" @click="openSuccess">成功提示页</button>
                    <button class="weui-btn" type="default" @click="openFail">失败提示页</button>
                </view>
            </view>
        </view>
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg: 'hello world'
        }
    },
    methods: {
        openSuccess: function () {
            this.wxOpenUrl('../success/main')
        },
        openFail: function () {
            this.wxOpenUrl('../fail/main')
        }
    }
}
</script>
<style lang="less">  
</style>

