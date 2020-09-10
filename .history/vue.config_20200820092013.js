module.exports = {
    devServer: {
        host: '0.0.0.0',
        proxy: {
            '/api': {
                ws: false,
                target: '',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    }
}