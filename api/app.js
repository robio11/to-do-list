import Cryptr from "cryptr";
const cryptr = new Cryptr ("myTotallySecretKey");

const encryptedString = cryptr.encrypt("This is a secret key");
const decryptedString = cryptr.decrypt(encryptedString);

console.log(encryptedString);
console.log(decryptedString);