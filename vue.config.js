module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'components':'@/components',
                'network':'@/network',
                'view':'@/view',
                'assets':'@/assets'
            }
        }
    }
}