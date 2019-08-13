const path = require('path');
const crypto = require('crypto');

const Bot = require(path.resolve(__dirname, 'Bot.js'));

class User extends Bot {
  constructor() {
    super();
    this.name = 'User';
  }

  init({ database, logger, i18n }) {
    return super.init({ database, logger, i18n });
  }

  async start() {
    return super.start();
  }

  ready() {
    return super.ready();
  }

  register() {
    return Promise.resolve({
      success: true,
      data: {
        UID:  crypto.randomBytes(12).toString('hex'),
        next: new Date().getTime() + 3000000
      }
    });
  }

  login() {
    return this.register();
  }

  verify() {
    return Promise.resolve({
        success: true,
        data: {}
      });
  }

  logout() {
    return Promise.resolve({
        success: true,
        data: {}
      });
  }

  checkToken() {
    return Promise.resolve({
        success: true,
        data: {}
      });
  }

  renewToken() {
    return Promise.resolve({
        success: true,
        data: {}
      });
  }

  getProfile() {
    return Promise.resolve({
        success: true,
        data: {}
      });
  }

  updateProfile() {
    return Promise.resolve({
        success: true,
        data: {}
      });
  }

  checkin() {
    return Promise.resolve({
        success: true,
        data: {}
      });
  }
}

module.exports = User;