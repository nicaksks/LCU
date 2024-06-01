const Client = require("../default/Client");

class ForceLane extends Client {

  jungle() {
    this._instance.patch('/lol-champ-select/v1/session/my-selection', {
      spellId: 4,
      spell2Id: 11
    });
  }

  lane() {
    this._instance.patch('/lol-champ-select/v1/session/my-selection', {
      spellId: 4,
      spell2Id: 14
    });
  }

}

module.exports = new ForceLane();