module.exports = {
    devServer: {
        host: '0.0.0.0',
        proxy: {
            '/api': {
                ws: false,
                target: 'http://localhost:8888',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    }
}