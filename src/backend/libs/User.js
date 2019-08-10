const path = require('path');

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
}

module.exports = User;