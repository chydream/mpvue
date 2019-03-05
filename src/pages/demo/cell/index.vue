<template>
    <div>
        <cell :text="text"></cell>
    </div>
</template>
<script>
import Cell from '@/components/weui/cell/index'
export default {
    components: {
        Cell
    },
    data () {
        return {
            text: 'hello',
            num: 1,
            items: [{
                title: '什么情况',
                icon: '',
                remark: ''
            }]
        }
    }
}
</script>
<style lang="less" scoped>
</style>