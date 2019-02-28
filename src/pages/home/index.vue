<template>
    <div class="home">
        {{msg}}{{isCollapse}}<i class="fa fa-address-book"></i>{{filePath}}
        <button @click="showAlert">按钮dd</button>
        <x-button type="primary">dddd</x-button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import xButton from '@/components/weui/x-button/index'
export default {
    components: {
        xButton
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
</style>
