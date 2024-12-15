import config from '../../config.cjs';
const { zokou } = require("../framework/zokou");
const fancy = require("../scs/hanstz/hanstzfan");

const ping = async (m, sock) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "fancy") {
    const start = new Date().getTime();
    await m.React('😎');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    try {
        if (id === undefined || text === undefined) {
            return await repondre(`\nExemple : ${prefixe}fancy 10 HANS TZ\n` + String.fromCharCode(8206).repeat(4001) + fancy.list('HANS✌️ MD ', fancy));
        }

        const selectedStyle = fancy[parseInt(id) - 1];
        if (selectedStyle) {
            return await repondre(fancy.apply(selectedStyle, text));
        } else {
            return await repondre('_Style introuvable :(_');
        }
    } catch (error) {
        console.error(error);
        return await repondre('_Une erreur s\'est produite :(_');
    }
});

    sock.sendMessage(m.from, { text }, { quoted: m });
  }
}

export default ping;
