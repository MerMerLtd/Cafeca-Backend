const path = require('path');
const LineBot = require('@line/bot-sdk');

const Bot = require(path.resolve(__dirname, 'Bot.js'));

class Line extends Bot {
  constructor() {
    super();
    this.name = 'Line';
  }

  async init({ database, config, logger, i18n }) {
    await this.initialLineBot(config.line);
    return super.init({ database, config, logger, i18n });
  }

  async initialLineBot({ channelId, channelAccessToken, channelSecret }) {
    console.log(channelId, channelAccessToken, channelSecret);
    this.LineBot = new LineBot.Client({ channelId, channelSecret, channelAccessToken });
    console.log(this.LineBot);
    return this.LineBot;
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

module.exports = Line;