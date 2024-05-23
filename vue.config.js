const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    devServer: {
        port: 3000,
        proxy: {
            '^/devops': {
                // target: 'http://192.168.1.87:8080',
                target: 'http://127.0.0.1:8080',
                changeOrigin: true,
            }
        }
    },
    transpileDependencies: true,
    lintOnSave: false,
})
