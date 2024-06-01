const Client = require("../default/Client");

class Chat extends Client {

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

module.exports = new Chat();