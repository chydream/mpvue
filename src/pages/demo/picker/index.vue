<template>
    <div>
        <view class="page">
            <view class="page__hd">
                <view class="page__title">Picker</view>
                <view class="page__desc">选择器，这里使用小程序原生的picker。</view>
            </view>
            <view class="page__bd">
                <view class="weui-btn-area">
                    <picker @change="bindPickerChange" :value="index" :range="array" class="ml-10">
                        <button type="default">单列选择器</button>
                    </picker>
                    <picker  mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange" class="ml-10">
                        <button type="default">时间选择器</button>
                    </picker>
                    <picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange" class="ml-10">
                        <button type="default">日期选择器</button>
                    </picker>
                </view>
            </view>
        </view>
    </div>
</template>
<script>
export default {
    data () {
        return {
            array: ['美国', '中国', '巴西', '日本'],
            index: 0,
            date: '2016-09-01',
            time: '12:01'
        }
    },
    methods: {
        bindPickerChange (e) {
            this.index = e.mp.detail.value
        },
        bindTimeChange (e) {
            console.log(e.mp.detail.value)
            this.time = e.mp.detail.value
        },
        bindDateChange (e) {
            this.time = e.mp.detail.value
        }
    }
}
</script>
<style lang="less" scoped>
    .ml-10{
        margin-bottom: 10px;
    }
</style>


