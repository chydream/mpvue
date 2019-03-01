const mixinsFun = {
  data () {
    return {
      filePath: 'http://192.168.80.105/FileCenter',
      permission: {
        view: 'view',
        add: 'add',
        edit: 'edit',
        delete: 'delete'
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
    }
  }
}
const mixinsIndex = {
  install: function (Vue, options) {
    Vue.mixin(mixinsFun)
  }
}

export default mixinsIndex
