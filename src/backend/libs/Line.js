const path = require('path');
const line = require('@line/bot-sdk');

const Bot = require(path.resolve(__dirname, 'Bot.js'));

class Business extends Bot {
  constructor() {
    super();
    this.name = 'Line';
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

  async webhook({ query, body }) {
    console.log(JSON.stringify(query));
    console.log(JSON.stringify(body));
    return {};
  }
}

module.exports = Business;