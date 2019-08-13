const path = require('path');

const Bot = require(path.resolve(__dirname, 'Bot.js'));

class Asset extends Bot {
  constructor() {
    super();
    this.name = 'Asset';
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

  addCreditCard() {
    return Promise.resolve({
      success: true,
      data: {}
    });
  }

  removeCreditCard() {
    return Promise.resolve({
        success: true,
        data: {}
      });
  }

  listCard() {
    return Promise.resolve({
        success: true,
        data: {}
      });
  }

  listGivenCard() {
    return Promise.resolve({
        success: true,
        data: {}
      });
  }

  readCard() {
    return Promise.resolve({
        success: true,
        data: {}
      });
  }

  giveCard() {
    return Promise.resolve({
        success: true,
        data: {}
      });
  }

  takeCard() {
    return Promise.resolve({
        success: true,
        data: {}
      });
  }

  returnCard() {
    return Promise.resolve({
        success: true,
        data: {}
      });
  }
}

module.exports = Asset;