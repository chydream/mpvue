<template>
    <div>
        <badge :text="num"></badge>
        <badge :isDot="true"></badge>
    </div>
</template>
<script>
import Badge from '@/components/weui/badge/index'
export default {
    components: {
        Badge
    },
    data () {
        return {
            msg: 'hello',
            num: 1
        }
    }
}
</script>
<style lang="less" scoped>
</style>