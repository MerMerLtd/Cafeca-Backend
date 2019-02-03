module.exports = {
  apps: [{
    name: 'Cafeca-Backend',
    script: 'bin/start.js',
    log_date_format: 'YYYY-MM-DD',
    watch: [
      'lib'
    ],
    env: {
      NODE_ENV: 'production'
    }
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      key: `private/cafeca.pem`,
      host: '52.199.54.228',
      ref: 'origin/master',
      repo: 'https://github.com/MerMerLtd/Cafeca-Backend',
      path: '/etc/Cafeca-Backend',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
    }
  }
};
