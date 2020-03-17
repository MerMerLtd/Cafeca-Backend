const path = require('path');

const Bot = require(path.resolve(__dirname, 'Bot.js'));

class Business extends Bot {
  constructor() {
    super();
    this.name = 'Business';
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

  async webhook() {
    console.log(arguments[0]);
    return {};
  }
}

module.exports = Business;