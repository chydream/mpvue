<template>
    <div class="home">{{msg}}{{isCollapse}}<i class="fa fa-address-book"></i></div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            msg: 'hello'
        }
    },
    computed: {
        ...mapGetters(['isCollapse'])
    }
}
</script>
<<style lang="scss" scoped>
    .home{
       background:red; 
    }
</style>>
