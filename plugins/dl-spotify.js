//thanks To Guru

import fetch from 'node-fetch';
import displayLoadingScreen from '../lib/loading.js';
let handler = async (m, { conn, text }) => {
    if (!text) {
        console.log('لم نجد الأغنية التي تبحث عنها .. \n instagram \n https://www.instagram.com/ovmar_1 \n Whatsapp GP \n https://chat.whatsapp.com/EtvWb5preas43EOZNqALjx.');
        throw `*إسم الأغنية? \n instagram \n https://www.instagram.com/ovmar_1 \n Whatsapp GP \n https://chat.whatsapp.com/EtvWb5preas43EOZNqALjx*`;
    }
  m.react('🎶')
  await displayLoadingScreen(conn, m.chat);
  let pp = 'https://telegra.ph/file/3fb2f76884257ea29252d.jpg'
    const query = encodeURIComponent(text);
    let res = `https://guruapi.tech/api/spotifydl?url=${query}`
   // let spotify = await (await fetch(res)).buffer()
    let doc = {
        audio: {
          url: res
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "L3ZWA.mp3",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: "اهلا وسهبا",
            body: `Now playing: ${text}`,
            thumbnailUrl: pp,
            sourceUrl: null,
            mediaType: 1,
            renderLargerThumbnail: false
          }
        }
    };
    
    await conn.sendMessage(m.chat, doc, { quoted: m });
}
handler.help = ['spotify'];
handler.tags = ['downloader'];
handler.command = /^(spotify|song)$/i;

export default handler;
