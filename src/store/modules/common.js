const common = {
    namespaced: true,
    state: {
        isCollapse: false,
        tagList: [],
        tag: {},
        isFullScreen: false,
        // 页面缓存配置
        keepAlive: [],
        keepAlivePage: ['Page', 'Auth'],
        keepAlivePath: ['/item/page', '/item/auth']
    },
    getters: {
        
    },
    mutations: {
        SET_COLLAPSE (state, params) {
            state.isCollapse = !state.isCollapse
        }
    },
    actions: {

    }
}
export default common
