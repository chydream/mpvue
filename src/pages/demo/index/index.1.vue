<template>
    <div class="home">
        <flexbox>
            <flexbox-item>
                <div class="flex-demo">1</div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo">2</div>
            </flexbox-item>
        </flexbox>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Flexbox from '@/components/weui/flexbox/flexbox'
import FlexboxItem from '@/components/weui/flexbox/flexbox-item'
export default {
    components: {
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
.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.weui-grids {
  background-color: #fff;
}
</style>
