const url = require("../../models/url");
var localStorage = require("node-localstorage").LocalStorage;
localStorage = new localStorage("./storage");

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

 class UrlTransaction{
  crtUrl(longUrl){
    url.longUrl = longUrl;
    url.shortUrl = generateString(6);
    localStorage.setItem("shortUrl", Url.shortUrl);
    localStorage.setItem("longUrl", Url.longUrl.longUrl);
  }
 }
module.exports = UrlTransaction;