import CryptoJS = require("crypto-js");

export let hmacsha256 = (message: string, secret: string) => {
    return CryptoJS.HmacSHA256(message, secret).toString();
};

export let md5 = (message: string) => {
    return CryptoJS.MD5(message);
};
