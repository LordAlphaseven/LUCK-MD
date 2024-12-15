import config from '../../config.cjs';

const ping = async (m, sock) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "repo") {
    const start = new Date().getTime();
    await m.React('😎');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    const text = `*ʜᴇʟʟᴏᴡ ᴡʜᴀᴛsᴀᴀᴘ ᴜsᴇʀ
ᴛʜɪs ɪs* *HANS-MD .*\n sᴜᴘᴘᴏʀᴛ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ *ʙʏ*,  https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31

╔═━━━━════──────➳
║╔═━━━━━━━━━━════─━━━━━━─➳
║║ 🗼 *REPOSITORY:* ${data.html_url}
║║ 🌟 *STARS:* ${repoInfo.stars}
║║ 🧧 *FORKS:* ${repoInfo.forks}
║║ 📅 *RELEASE DATE:* ${releaseDate}
║║ 🕐 *UPDATE ON:* ${repoInfo.lastUpdate}
║║ 👨‍💻 *OWNER:* *HANSTZTECH*
║║ 💞 *NAME:* *HANS-MD *
║║ 🥰 *ENJOY TO USE HANS MD *
║╚══━━━━━━━━════─━━━━━━──➳
║╔═━━━━━━━━━━════─━━━━━━──✰ 
║║  ╭───────────────➳
║║  ║✨ MADE BY HANS ✌️😎
║║  ╰───────────────➳
║╚══━━━━━━━━━════─━━━━━━──✰ 
╚══━━━━━━━════───➳
 ✰━━━━━━━━━━━━━━━━━━✰`;
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              ...(await prepareWAMessageMedia({
                image: {
                  url: 'https://files.catbox.moe/huyw9t.jpg',
                  
    sock.sendMessage(m.from, { text }, { quoted: m });
  }
}

export default ping;
