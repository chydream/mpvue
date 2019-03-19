<template>
  <div class="container">
    <div class="userinfo" @click='login'>
      <img :src="userinfo.avatarUrl" alt="">
      <p>{{userinfo.nickName}}</p>
    </div>
    <YearProgress></YearProgress>
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">
      获取用户信息
    </button>
    <button @click='scanBook' class='btn'>添加图书</button>
  </div>
</template>
<script>
import qcloud from 'wafer2-client-sdk'
import YearProgress from '@/components/YearProgress'
export default {
  components: {
    YearProgress
  },
  data () {
    return {
      userinfo: {
        avatarUrl: '../../../static/img/unlogin.png',
        nickName: '点击登录'
      }
    }
  },
  methods: {
    scanBook () {
      wx.scanCode({
        success: (res) => {
          if (res.result) {
            console.log(res.result)
          }
        }
      })
    },
    login () {
      // wx.getSystemInfo({
      //   success (res) {
      //     console.log(res)
      //   }
      // })
      qcloud.setLoginUrl('http://localhost:8080/#/login')
      qcloud.login({
        success: res => {
          // console.log(res)
        },
        fail: err => {
          console.log(err)
        }
      })
    },
    onGotUserInfo (e) {
      console.log(e.mp.detail)
    }
  },
  onShow () {
    // console.log(123)
    let userinfo = wx.getStorageSync('userinfo')
    // console.log([userinfo])
    if (userinfo) {
      this.userinfo = userinfo
    }
    console.log(this.userinfo)
  }
}
</script>

<style lang='scss'>
.container{
  padding:0 30rpx;

}  
.userinfo{
  margin-top:100rpx;
  text-align:center;
  img{
    width: 150rpx;
    height:150rpx;
    margin: 20rpx;
    border-radius: 50%;
  }
}


</style>