import config from '../../config.cjs';

const ping = async (m, sock) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "alive") {
    const start = new Date().getTime();
    await m.React('🌟');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    const text = `*ℍ𝔸ℕ𝕊-𝕄𝔻-𝕀𝕊-𝔸ℂ𝕋𝕀𝕍𝔼 𝔽𝕆ℝ 𝕃𝕀𝕍𝔼 😎*

╔═━━━━━━━━━━━━════──━━━━━━━━─➳
║  𝕋ℍ𝕀𝕊 𝕀𝕊 ℍ𝔸ℕ𝕊-𝕄𝔻-ℕ𝔼𝕎-𝕌ℙ𝔻𝔸𝕋𝔼 2025 😎
║ *${days} ᴅᴀʏ*
║ *${hours} ʜᴏᴜʀ*
║ *${minutes} ᴍɪɴᴜᴛᴇ*
║ *${seconds} sᴇᴄᴏɴᴅ*
║ *ʜᴇʟʟᴏ ${m.pushName} ᴡᴇʟʟᴄᴏᴍᴇ ᴛᴏ ᴛʜᴇ ʜᴀɴs-ᴍᴅ
╚══━━━━━━━━━━━════─━━━━━━━━──➳
`;
    sock.sendMessage(m.from, { text }, { quoted: m });
  }
}

export default ping;
