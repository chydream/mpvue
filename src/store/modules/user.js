import {login, getMenu, logout, getUserInfo} from '@/api/userApi'
const user = {
    namespaced: true,
    state: {
        userInfo: JSON.parse(sessionStorage.getItem('userInfo')) || {},
        role: JSON.parse(sessionStorage.getItem('role')) || [],
        token: sessionStorage.getItem('token') || '',
        menu: JSON.parse(sessionStorage.getItem('menu')) || [],
        permission: {}
    },
    getters: {},
    mutations: {
        SET_TOKEN: (state, params) => {
            state.token = params
            sessionStorage.setItem('token', params)
        },
        SET_MENU: (state, params) => {
            state.menu = params
            sessionStorage.setItem('menu', JSON.stringify(params))
        },
        SET_ROLE: (state, params) => {
            state.role = params 
            sessionStorage.setItem('role', JSON.stringify(params))
        },
        SET_USER_INFO: (state, params) => {
            state.userInfo = params
            sessionStorage.setItem('userInfo', JSON.stringify(params))
        }
    },
    actions: {
        Login ({state, commit, dispatch}, params) {
            return new Promise((resolve, reject) => {
                login(params).then(res => {
                    commit('SET_TOKEN', res.data.token)
                    resolve(res)
                })
            })
        },
        Logout ({state, commit, dispatch}, params) {
            return new Promise((resolve, reject) => {
                logout(params).then(res => {
                    commit('SET_TOKEN', '')
                    commit('SET_ROLE', [])
                    commit('SET_USER_INFO', {})
                    resolve(res)
                })
            })
        },
        GetUserInfo ({state, commit, dispatch}, params) {
            return new Promise((resolve, reject) => {
                getUserInfo(params).then(res => {
                    commit('SET_ROLE', res.data.role)
                    commit('SET_USER_INFO', res.data)
                    resolve(res)
                })
            })
        },
        GetMenu ({state, commit, dispatch}, params) {
            return new Promise((resolve, reject) => {
                var role = state.role.length > 0 ? state.role[0] : ''
                getMenu(role).then(res => {
                    commit('SET_MENU', res.data)
                    resolve(res)
                })
            })
        },
        // 将菜单列表扁平化形成权限列表
        GetPermissionList ({state, dispatch}) {
            return new Promise((resolve) => {
                let permissionList = []
                // 将菜单数据扁平化为一级
                function flatNavList (arr) {
                    for (let v of arr) {
                        if (v.children && v.children.length) {
                            flatNavList(v.children)
                        } else {
                            permissionList.push(v)
                        }
                    }
                }
                // dispatch('GetUserInfo', state.token).then(res => {
                    dispatch('GetMenu').then(res => {
                        flatNavList(state.menu)
                        resolve(permissionList)
                    })
                // })
            })
        }
    }
}
export default user
