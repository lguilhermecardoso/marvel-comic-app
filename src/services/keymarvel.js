import { md5 } from 'pure-md5'

export const url = 'http://gateway.marvel.com/v1/public/';

class KeyMarvel {
  getPublicKey = () => process.env.REACT_APP_MARVEL_PUBLIC_KEY

  getPrivateKey = () => process.env.REACT_APP_MARVEL_PRIVATE_KEY

  getApiParams = () => {

    const ts = new Date().getTime();

    return {
      ts,
      apikey: this.getPublicKey(),
      hash: md5(`${ts}${this.getPrivateKey()}${this.getPublicKey()}`),
    };
  };
}

export default new KeyMarvel()