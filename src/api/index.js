import ajax from './ajax'

const BASE_URL = '/api'

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

// 获取短信验证码
export const getphoneCode = (phone) => ajax(BASE_URL + '/api/send_code', { phone })

// 短信验证码登录
export const phoneCodeLogin = (phone, code) => ajax(BASE_URL + '/api/login_code', { phone, code }, "POST")

// 账号密码登录
export const pwdLogin = (name, pwd, captcha) => ajax(BASE_URL + '/api/login_pwd', { name, pwd, captcha }, "POST")

// 自动登录
export const getUserInfo = () => ajax(BASE_URL + '/api/user_info')

// 退出登录
export const getLogout = () => ajax(BASE_URL + '/api/logout')
