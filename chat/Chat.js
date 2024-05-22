const Client = require("../default/Client");

module.exports = class Chat extends Client {

  constructor() {
    super()
  };

  icon(value = 1) {
    this._instance.put('/lol-chat/v1/me/', {
      "icon": parseInt(value)
    });
  }

  statusMessage(message) {
    this._instance.put('/lol-chat/v1/me/', {
      "statusMessage": message,
    });
  }

  challengeIcon() {
    this._instance.put('/lol-chat/v1/me/', {
      "lol": {
        "challengeCrystalLevel": "MASTER",
      }
    });
  }

}