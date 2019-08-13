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
      key: `private/Cafeca.pem`,
      host: '13.231.110.151',
      ref: 'origin/master',
      repo: 'https://github.com/MerMerLtd/Cafeca-Backend',
      path: '/etc/Cafeca-Backend',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
