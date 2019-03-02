<template>
  <div class="home">
        <flexbox>
            <flexbox-item>
                <div class="flex-demo" @click="showActionSheet">
                    <p><icon type="success" size="18" /></p>
                    <p><span>Actionsheet</span></p>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo" @click="showAlert">
                    <p><icon type="success" size="18" /></p>
                    <p><span>Alert</span></p>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo" @click="showConfirm">
                    <p><icon type="success" size="18" /></p>
                    <p><span>Confirm</span></p>
                </div>
            </flexbox-item>
        </flexbox>
        <flexbox>
            <flexbox-item>
                <a href="../msg/main">
                    <div class="flex-demo">
                        <p><icon type="success" size="18" /></p>
                        <p><span>Msg</span></p>
                    </div>
                </a>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo"  @click="goUrl('../picker/main')">
                    <p><icon type="success" size="18" /></p>
                    <p><span>Picker</span></p>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo" @click="showToast">
                    <p><icon type="success" size="18" /></p>
                    <p><span>Toast</span></p>
                </div>
            </flexbox-item>
        </flexbox>
        <flexbox>
            <flexbox-item>
                <div class="flex-demo" @click="goUrl('../badge/main')">
                    <p><icon type="success" size="18" /></p>
                    <p><span>badge</span></p>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo">
                    <p><icon type="success" size="18" /></p>
                    <p><span>panel</span></p>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo" @click="showToast">
                    <p><icon type="success" size="18" /></p>
                    <p><span>badge</span></p>
                </div>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Flexbox from '@/components/weui/flexbox/flexbox'
import FlexboxItem from '@/components/weui/flexbox/flexbox-item'
import Grid from '@/components/weui/grid/grid'
import GridItem from '@/components/weui/grid/grid-item'
import Actionsheet from '@/components/weui/actionsheet/index'
export default {
    components: {
        Flexbox,
        FlexboxItem,
        Grid,
        GridItem,
        Actionsheet
    },
    name: 'demoList',
    activated () {
    },
    mounted () {
    },
    methods: {
        showActionSheet () {
            this.wxOpen(this.itemList)
        },
        showAlert () {
            this.wxOpenAlert(this.content)
        },
        showConfirm () {
            this.wxOpenConfirm(this.title, this.content)
        },
        goUrl (url) {
            this.wxOpenUrl(url)
        },
        showToast () {
            this.wxOpenToast('已完成')
        }
    },
    data () {
        return {
            show4: false,
            menus1: {
                menu1: 'Share to friends',
                menu2: 'Share to timeline'
            },
            height: 0,
            i: 2,
            test: [1, 2],
            itemList: ['A', 'B', 'C'],
            title: '123',
            content: '456'
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
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
</style>