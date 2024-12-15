"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "Luck", reaction: "nipobos", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello my name is  *LUCK MD  * \n\n ' + "i'm a whatsapp bot multi-device created ";
    let d = ' by *Sasaki family*';
    let varmess = z + d;
    var img = 'https://i.ibb.co/Y3V6LVn/2a7c9dac44ff0e9f.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Hi my name is *LUCK MD* \n\n '+' I'm a Multi-device Whatsapp bot '
      let d =' developed by *Sasaki Family*'
      let varmess=z+d
      var img='https://i.ibb.co/Y3V6LVn/2a7c9dac44ff0e9f.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
