const Client = require("../default/Client");

module.exports = class ForceLane extends Client {
  constructor() {
    super()
  }

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