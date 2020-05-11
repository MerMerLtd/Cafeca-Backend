const path = require('path');
const dvalue = require('dvalue');
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

  async initialLineBot({ channelAccessToken, channelSecret }) {
    this.LineBot = new LineBot.Client({ channelSecret, channelAccessToken });
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
    const events = body.events;
    return events.map((event) => {
      return this.eventHandler({ event });
    });
  }

  async eventHandler({ event }) {
    const message = dvalue.randomPick(["Hi", "Yooooo", "罵咖你們好哇"]);
    const replyMessage = {
      type: "text",
      text: message
    };
    console.log(event.replyToken);
    console.log(replyMessage)
    return this.LineBot.replyMessage(event.replyToken, replyMessage);
  }
}

module.exports = Line;