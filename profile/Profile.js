const Client = require("../default/Client");

module.exports = class Profile extends Client {

  constructor() {
    super()
  };

  changeRank(value = 1) {
    this._instance.put('/lol-regalia/v2/current-summoner/regalia', {
      "bannerType": "blank",
      "crestType": "prestige",
      "highestRankedEntry": null,
      "lastSeasonHighestRank": null,
      "preferredBannerType": "lastSeasonHighestRank",
      "preferredCrestType": "prestige",
      "profileIconId": 14,
      "selectedPrestigeCrest": parseInt(value),
      "summonerLevel": null
    });
  }

  icon(value = 1) {
    this._instance.put('/lol-summoner/v1/current-summoner/icon', {
      "inventoryToken": "profileIconId",
      "profileIconId": parseInt(value)
    });
  }

  border(value = 1) {
    this._instance.put('/lol-regalia/v2/current-summoner/regalia', {
      "crestType": "prestige",
      "preferredBannerType": "lastSeasonHighestRank",
      "preferredCrestType": "prestige",
      "selectedPrestigeCrest": parseInt(value)
    });
  }

  banner(value = 2) {
    this._instance.post('/lol-challenges/v1/update-player-preferences/', {
      "bannerAccent": value.toString(),
    });
  }

  background(value = 4001) {
    this._instance.post('/lol-summoner/v1/current-summoner/summoner-profile', {
      "inventory": "summoner-profile",
      "key": "backgroundSkinId",
      "value": parseInt(value)
    });
  }

  title(value = 1) {
    this._instance.post('/lol-challenges/v1/update-player-preferences', {
      "title": value.toString(),
    });
  }

  copyChallenges(value = 1) {
    this._instance.post('/lol-challenges/v1/update-player-preferences', {
      "challengeIds": [parseInt(value), parseInt(value), parseInt(value)],
    });
  }

  clearChallenges() {
    this._instance.post('/lol-challenges/v1/update-player-preferences', {
      "challengeIds": []
    });
  }

  riotId(gameName, tagLine) {
    
    if (!gameName || !tagLine) throw new Error('Está faltando gameName ou tagLine');

    this._instance.post('/lol-summoner/v1/save-alias', {
      gameName,
      tagLine
    })
  }

}