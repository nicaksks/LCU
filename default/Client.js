const { default: axios } = require('axios');
const { Agent } = require('https');
const { execSync } = require('child_process');
const Config = require('../settings/Config');

module.exports = class Client {

  constructor() {
    this._instance = axios.create({
      headers: {
        "User-Agent": "Aram é o melhor modo",
        "Content-Type": "application/json",
      },
      httpsAgent: Agent({
        rejectUnauthorized: false
      })
    });
    this.connection();
  }

  #setHeadears(port, token) {
    this._instance.defaults.baseURL = `https://127.0.0.1:${port}`;
    this._instance.defaults.headers.authorization = `Basic ${token}`;
  }

  #riot() {

    const stdout = execSync(Config.WMIC);

    if (stdout.byteLength <= 6) throw new Error('Abra o client antes de executar o script.');

    const password = stdout.toString().match(/--remoting-auth-token=(.*?)"/)[1];
    const port = stdout.toString().match(/--app-port=(.*?)"/)[1];

    return {
      port,
      token: Buffer.from(`riot:${password}`).toString("base64")
    };

  }

  connection() {
    const { port, token } = this.#riot();
    this.#setHeadears(port, token);
  }

}