
import fs from 'fs';
import os from 'os';
import fetch from 'node-fetch';

let limit = 500;
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  let chat = global.db.data.chats[m.chat];
  if (!args || !args[0]) throw `✳️ Example:\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`;
  if (!args[0].match(/youtu/gi)) throw `❎ Verify that the YouTube link`;
  
  var gapi = `${gurubot}/v1/ytmp4?url=${encodeURIComponent(args)}`

  var ggapi = `${gurubot}/ytplay?url=${encodeURIComponent(args)}`

  const response = await fetch(ggapi);
  if (!response.ok) {
      console.log('خطأ في البحث عن الأغنية ..:', response.statusText);
      throw 'خطأ في البحث عن الأغنية..';
  }
  const data = await response.json();

  const caption = `هاذا هو الفيديو الخاص بك \n instagram \n https://www.instagram.com/ovmar_1 \n Whatsapp GP \n https://chat.whatsapp.com/EtvWb5preas43EOZNqALjx`


  let vid = await fetch(gapi)
  const vidBuffer = await vid.buffer();

  conn.sendFile(
    m.chat,
    vidBuffer,
    `error.mp4`,
    caption,
    m,
    false,
    { asDocument: chat.useDocument }
  );
     
};

handler.help = ['ytmp4 <yt-link>'];
handler.tags = ['downloader'];
handler.command = ['ytmp4', 'video', 'ytv'];
handler.diamond = false;

export default handler;

