import { HOME_CASUAL, HOME_NAV, HOME_SHOP, RECOMMEND_SHOP, SEARCH_GOODS } from './mutation-types'

export default {
    [HOME_CASUAL](state, { homecasual }) {
        state.homecasual = homecasual
    },
    [HOME_NAV](state, { homenav }) {
        state.homenav = homenav
    },
    [HOME_SHOP](state, { homeshoplist }) {
        state.homeshoplist = homeshoplist
    },
    [RECOMMEND_SHOP](state, { recommendshoplist }) {
        state.recommendshoplist = state.recommendshoplist.concat(recommendshoplist)
    },
    [SEARCH_GOODS](state, { searchgoods }) {
        state.searchgoods = searchgoods
    }
}