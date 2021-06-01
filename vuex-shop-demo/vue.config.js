module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://exam.flyhom.com/", // 介面的域名
                changeOrigin: true,
                ws:true,
                pathRewrite: {
                    "^/api": ""	//萬用字元
                }
            }
        },
    },
}