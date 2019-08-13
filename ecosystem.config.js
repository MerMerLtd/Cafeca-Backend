module.exports = {
  apps : [{
    name: 'Cafeca-Backend',
    script: 'bin/main.js',
    log_date_format: 'YYYY-MM-DD',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
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
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
