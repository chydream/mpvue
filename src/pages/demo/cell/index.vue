<template>
    <div>
        <cell-list :title="title" :items="items"></cell-list>
    </div>
</template>
<script>
import cellList from '@/components/weui/cell/index'
import card from '@/components/card'
export default {
    components: {
        cellList,
        card
    },
    data () {
        return {
            title: 'hello',
            num: 1,
            items: [
                {
                    title: '什么情况',
                    icon: '',
                    remark: ''
                },
                {
                    title: '什么情况',
                    icon: '',
                    remark: ''
                },
                 {
                    title: '什么情况',
                    icon: '',
                    remark: ''
                },
                {
                    title: '什么情况',
                    icon: '',
                    remark: ''
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
</style>