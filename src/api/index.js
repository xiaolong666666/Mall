import ajax from './ajax'

const BASE_URL = 'http://127.0.0.1:3000'

// 首页轮播图
export const getHomeCasual = () => ajax(BASE_URL + '/api/homecasual')

// 首页中间导航
export const getHomeNav = () => ajax(BASE_URL + '/api/homenav')

// 首页商品列表
export const getHomeShopList = () => ajax(BASE_URL + '/api/homeshoplist')

// 推荐商品列表
export const getRecommendShopList = (params) => ajax(BASE_URL + '/api/recommendshoplist', params)

// 搜索商品列表
export const getSearchGoods = () => ajax(BASE_URL + '/api/searchgoods')