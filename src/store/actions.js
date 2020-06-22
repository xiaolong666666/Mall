import { getHomeCasual, getHomeNav, getHomeShopList, getRecommendShopList, getSearchGoods } from './../api'
import { HOME_CASUAL, HOME_NAV, HOME_SHOP, RECOMMEND_SHOP, SEARCH_GOODS } from './mutation-types'

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
    }
}