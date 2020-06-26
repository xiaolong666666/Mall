import { getHomeCasual, getHomeNav, getHomeShopList, getRecommendShopList, getSearchGoods, getUserInfo, getLogout } from './../api'
import { HOME_CASUAL, HOME_NAV, HOME_SHOP, RECOMMEND_SHOP, SEARCH_GOODS, USER_INFO, RESET_USER_INFO } from './mutation-types'

export default {
    async reqHomeCasual({commit},callback){
        const result = await getHomeCasual()
        commit(HOME_CASUAL, { homecasual: result.data.message })
        callback && callback()
    },
    async reqHomeNav({ commit }){
        const result = await getHomeNav()
        commit(HOME_NAV, { homenav: result.data.message })
    },
    async reqHomeShopList({ commit }){
        const result = await getHomeShopList()
        commit(HOME_SHOP, { homeshoplist: result.data.message })
    },
    async reqRecommendShopList({ commit }, params, callback) {
        const result = await getRecommendShopList(params)
        commit(RECOMMEND_SHOP, { recommendshoplist: result.data.message })
        callback && callback()
    },
    async reqSearchGoods({ commit }) {
        const result = await getSearchGoods()
        commit(SEARCH_GOODS, { searchgoods: result.data.message.data })
    },
    currentUser({ commit }, userinfo){
        commit(USER_INFO, { userinfo })
    },
    async reqUserInfo({ commit }){
        const result = await getUserInfo()
        if(result.data.success_code===200){
            commit(USER_INFO, { userinfo: result.data.message })
        }
    },
    async reqLogout({ commit }){
        const result = await getLogout()
        if (result.data.success_code === 200){
            commit(RESET_USER_INFO)
        }
    }
}