<template>
    <div>
        <cell></cell>
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
            msg: 'hello',
            num: 1
        }
    }
}
</script>
<style lang="less" scoped>
</style>