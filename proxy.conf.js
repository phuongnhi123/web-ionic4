const PROXY_CONFIG = [
    {
        context: [
            "/member-service"
        ],
        target: "http://localhost:8080",
        secure: false,
        "changeOrigin": true,
        "logLevel": "debug",
        devServer: {
            useLocalIp: true,
            watchOptions: {
                poll: true
              }
          }
    },
];
module.exports = PROXY_CONFIG;
