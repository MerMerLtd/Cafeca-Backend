module.exports = {
    /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
    apps: [
        {
            name: 'Cafeca-Backend',
            script: 'bin/start.js',
            log_date_format: 'YYYY-MM-DD',
            watch: [
                'lib'
            ],
            env: {
                NODE_ENV: 'production'
            }
        }
    ],

    /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
    deploy: {
        production: {
            user: 'ubuntu',
            key: `${process.env.HOME}/Documents/ssh/chinaiSun.pem`,
            host: '52.199.54.228',
            ref: 'origin/master',
            repo: 'https://github.com/MerMerLtd/Cafeca-Backend',
            path: '/etc/Cafeca-Backend',
            'post-deploy': 'pm2 reload /etc/Cafeca-Backend/ecosystem.config.js',
        }
    }
};
