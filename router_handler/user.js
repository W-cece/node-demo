/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */

// 用这个包来生成 Token 字符串
const jwt = require('jsonwebtoken')
// 导入配置文件
const config = require('../config')
// 生成 Token 字符串
// const tokenStr = jwt.sign(user, config.jwtSecretKey, {
//     expiresIn: '10h', // token 有效期为 10 个小时
// })

//加密：
// // 对用户的密码,进行 bcrype 加密，返回值是加密之后的密码字符串
// userinfo.password = bcrypt.hashSync(userinfo.password, 10)
// 解密：
// // 拿着用户输入的密码,和数据库中存储的密码进行对比
// const compareResult = bcrypt.compareSync(用户输入的密码, 数据库中加密的密码)

const bcrypt = require('bcryptjs')

// 登录请求的处理函数
const login = (req, res) => {
    console.log(req,'请求参数')
    res.send({
        status: 0,
        message: '登录成功！',
        // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
        // token: 'Bearer ' + tokenStr,
    })
}
module.exports = {login}
// exports.login = (req, res) => {
//     console.log(req,'请求参数')
//     res.send({
//         status: 0,
//         message: '登录成功！',
//         // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
//         // token: 'Bearer ' + tokenStr,
//     })
//     // res.send('login OK')
// }
