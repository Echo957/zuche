import request from './request'
const qs = require('qs')
// 红娘列表
export const wx = (opt) => request({
    method: 'GET',
    url: '/mp/users/getMtchmakerList',
    params: {
        next: opt
    }
})

// 用户列表
export const getuserList = (opt) => request({
    method: 'POST',
    url: '/mp/users/getBlindUserList',
    data: qs.stringify({
        gender: opt.gender,
        currentPage: opt.currentPage,
        pageSize: 10
    })
})
//登录
export const getlogin = (opt) => request({
    method: 'POST',
    url: '/mp/base/loginCheck',
    data: qs.stringify({
        username: opt.username,
        password: opt.password
    })
})
//首页
export const getform = () => request({
    method: 'POST',
    url: '/mp/index/statisticalIndex',
    data: qs.stringify({

    })
})
//首页最近一周订单统计
export const getformweeks = () => request({
    method: 'POST',
    url: '/mp/index/getWeekOrder',
    data: qs.stringify({

    })
})
//创建/修改门店
export const getstores = (opt) => request({
    method: 'POST',
    url: '/mp/stores/createStore',
    data: qs.stringify(opt)
})

//获取门店列表
export const getstorelist = (opt) => request({
    method: 'POST',
    url: '/mp/stores/getStoreList',
    data: qs.stringify({
        currentPage: opt
    })
})

//门店状态修改
export const getstorestate = (opt) => request({
    method: 'POST',
    url: '/mp/stores/updateStoreStatus',
    data: qs.stringify({
        sid: opt.sid,
        status: opt.status
    })
})

//获取车辆列表
export const getcarlist = (opt) => request({
    method: 'POST',
    url: '/mp/car/getCarsList',
    data: qs.stringify({
     })
})

//获取车辆类型
export const getcartype = (opt) => request({
    method: 'POST',
    url: '/mp/car/getCarClassification',
    data: qs.stringify({
     })
})

//新建/编辑车辆
export const getcarNew = (opt) => request({
    method: 'POST',
    url: '/mp/car/createCar',
    data: qs.stringify({
        cid: opt.cid,
        name: opt.name,
        licensePlate: opt.licensePlate,
        picture: opt.picture,
        structure: opt.structure,
        displacement: opt.displacement,
        gear: opt.gear,
        seats: opt.seats,
        subordinate: opt.subordinate,
        carType: opt.carType,
        depositPrice: opt.depositPrice,
        rentPrice: opt.rentPrice,
        servicePrice: opt.servicePrice,
        insurancePrice: opt.insurancePrice,
        otherPrice: opt.otherPrice
     })
})