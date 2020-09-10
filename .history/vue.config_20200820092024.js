module.exports = {
    devServer: {
        host: '0.0.0.0',
        proxy: {
            '/api': {
                ws: false,
                target: 'http://localhost:7001/v1',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    }
}