<template>
    <div>
        <panel></panel>
    </div>
</template>
<script>
import panel from '@/components/weui/panel/index'
export default {
    components: {
        panel
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