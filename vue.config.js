module.exports = {
    // 关闭语法检查
    lintOnSave: false,
    // 开启代理服务器（方法一，智能配置一个代理）
    /* devServer: {
        proxy: 'http://localhost:8081'
    } */

    // 开启代理服务器（方法二，能配置多个代理）
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8081',
                // 通过正则表达式重写路径，去掉前缀，解决404问题
                pathRewrite: { '^/api': '' },
                // ws: true, // 支持 websocket 默认为true
                // changeOrange: true // 用户控制请求头中的 host 值，默认为true ，true：host值与目标地址相同，false：host值为当前脚手架的host
            },
            '/demo': {
                target: 'http://localhost:8082',
                pathRewrite: { '^/demo': '' },
            }
        }
    }
}