import axios from "axios";

export default {
    //登录手机验证码请求
    async getPhone(mobile) {
        const data = await axios.get(`/vercode?mobile=${mobile}`)
        return data
    },
    //验证码登录
    async postCode(code) {
        const data = await axios.post(`/vercode`, code)
        return data
    },
    //手机密码登录
    async postPassword(info) {
        const data = await axios.post(`/login`, info)
        return data
    },
    //获取个人信息
    async getInfo(info) {
        const data = await axios.get(`/info`, info)
        return data
    },
    //提交个人信息变更
    async postInfo(info){
        const data = await axios.post(`/info`, info)
        return data
    },
    //获取紧急联系人
    async getEmergencePhone(){
        const data = await axios.get(`/phone`)
        return data
    },
    //提交紧急联系人
    async postEmergencePhone(info){
        const data = await axios.post(`/phone`, info)
        return data
    },
    //获取历史
    async getHistory(start,end){
        const data = await axios.get(`/fatigue/query?start=${start}&end=${end}`, )
        return data
    }


}
