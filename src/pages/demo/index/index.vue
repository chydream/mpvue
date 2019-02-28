<template>
  <div class="home">
        <flexbox>
            <flexbox-item>
                <div class="flex-demo">
                    <p><icon type="success" size="18" /></p>
                    <p><span>Actionsheet</span></p>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo">
                    <p><icon type="success" size="18" /></p>
                    <p><span>Actionsheet</span></p>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo">
                    <p><icon type="success" size="18" /></p>
                    <p><span>Actionsheet</span></p>
                </div>
            </flexbox-item>
        </flexbox>
        <flexbox>
            <flexbox-item>
                <div class="flex-demo">
                    <p><icon type="success" size="18" /></p>
                    <p><span>Actionsheet</span></p>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo">
                    <p><icon type="success" size="18" /></p>
                    <p><span>Actionsheet</span></p>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo">
                    <p><icon type="success" size="18" /></p>
                    <p><span>Actionsheet</span></p>
                </div>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Flexbox from '@/components/weui/flexbox/flexbox'
import FlexboxItem from '@/components/weui/flexbox/flexbox-item'
export default {
    components: {
        Flexbox,
        FlexboxItem
    },
    name: 'demoList',
    activated () {
    },
    mounted () {
    },
    methods: {
    },
    data () {
        return {
        height: 0
        }
    },
    computed: {
    }
}
</script>

<style lang="less">
.vux-flex-row:nth-child(1){
    border-top: 1px solid #d7d7d7;
}
.flex-demo {
  text-align: center;
  color: #333;
  border-right: 1px solid #d7d7d7;
  border-bottom: 1px solid #d7d7d7;
  padding: 20px 10px;
}
.flex-demo:active{
    background: #ececec;
}
.flex-demo span{
    font-size: 15px;
}
</style>