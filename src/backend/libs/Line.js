const path = require('path');
const line = require('@line/bot-sdk');

const Bot = require(path.resolve(__dirname, 'Bot.js'));

class Business extends Bot {
  constructor() {
    super();
    this.name = 'Line';
  }

  async init({ database, config, logger, i18n }) {
    await this.initialLineBot(config.line);
    return super.init({ database, config, logger, i18n });
  }

  async initialLineBot({ channelId, channelAccessToken, channelSecret }) {
    this.line = line({ channelId, channelSecret, channelAccessToken });
    console.log(this.line);
    return this.line;
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