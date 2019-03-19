const mixinsFun = {
  data () {
    return {
      host: 'http://localhost:5757',
      config: {
        host: 'http://localhost:5757',
        loginUrl: `http://localhost:5757/weapp/login`,
        userUrl: `http://localhost:5757/weapp/user`
      }
    }
  },
  created () {
  },
  methods: {
    wxOpenToast: function (title, icon) {
      wx.showToast({
          title: title,
          icon: icon == undefined ? icon : 'success', // loading
          duration: 3000
      })
    },
    wxOpenUrl: function (url) {
      wx.navigateTo({
        url: url
      })
    },
    wxOpen: function (itemList) {
      wx.showActionSheet({
          itemList: itemList,
          success: function (res) {
              if (!res.cancel) {
                  console.log(res.tapIndex)
              }
          }
      })
    },
    wxOpenConfirm: function (title, content) {
      wx.showModal({
          title: title,
          content: content,
          confirmText: '确定',
          cancelText: '取消',
          success: function (res) {
              console.log(res)
              if (res.confirm) {
                  console.log('用户点击主操作')
              } else {
                  console.log('用户点击辅助操作')
              }
          }
      })
    },
    wxOpenAlert: function (content) {
        wx.showModal({
            content: content,
            showCancel: false,
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                }
            }
        })
    },
    request (url, method, data, header = {}) {
      return new Promise((resolve, reject) => {
        wx.request({
          data,
          method,
          header,   
          url: this.config.host + url, 
          success: function (res) {
            if (res.data.code === 0) {
              resolve(res.data.data)
            } else {
              this.wxOpenConfirm('失败', res.data.data.msg)
              reject(res.data)
            }
          }
        })
      })
    },
    post (url, data) {
      return this.request(url, 'POST', data)
    },
    get (url, data) {
      return this.request(url, 'GET', data)
    },
    scanCode () {
      wx.scanCode({
        onlyFromCamera: true,
        success (res) {
          console.log(res)
        }
      })
    },
    getSystemInfo () {
       wx.getSystemInfo({
        success (res) {
          console.log(res)
        }
      })
    }
  }
}
const mixinsIndex = {
  install: function (Vue, options) {
    Vue.mixin(mixinsFun)
  }
}

export default mixinsIndex
