const getters = {
    token: state => state.user.token,
    role: state => state.user.role,
    userInfo: state => state.user.userInfo,
    menu: state => state.user.menu,
    isCollapse: state => state.common.isCollapse,
    tagList: state => state.common.tagList,
    isFullScreen: state => state.common.isFullScreen,
    keepAlive: state => state.common.keepAlive,
    keepAlivePage: state => state.common.keepAlivePage,
    keepAlivePath: state => state.common.keepAlivePath
}
export default getters
