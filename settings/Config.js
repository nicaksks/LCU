module.exports = class Config {

  static get WMIC() {
    return `WMIC PROCESS WHERE name='LeagueClientUx.exe' GET commandline`;
  };

}