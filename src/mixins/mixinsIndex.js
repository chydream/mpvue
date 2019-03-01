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
    wxOpen: function (itemList) {
      wx.showActionSheet({
          itemList: itemList,
          success: function (res) {
              if (!res.cancel) {
                  console.log(res.tapIndex)
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
