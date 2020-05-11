const path = require('path');

const Bot = require(path.resolve(__dirname, 'Bot.js'));

class Attendance extends Bot {
  constructor() {
    super();
    this.name = 'Attendance';
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

module.exports = Attendance;