import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*هاذا الأمر خاص باإنشاء الصور*\n\n*مثال*\n*◉ ${usedPrefix + command} Beautiful anime girl*\n*◉ ${usedPrefix + command} A CAT WITH DOG*`;

  try {
    m.reply('*جاري ٳنشاء الصورة ... \n instagram \n https://www.instagram.com/ovmar_1 \n Whatsapp GP \n https://chat.whatsapp.com/EtvWb5preas43EOZNqALjx*');

    const endpoint = `https://www.bing.com/images/create?q=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);
    
    if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'image.png', null, m);
    } else {
      throw '*خطٲ في ٳنشاء الصورة ❗*';
    }
  } catch {
    throw '*_أُووبس! حدث خطأ ما أثناء إنشاء الصور. الرجاء معاودة المحاولة في وقت لاحق_.*';
  }
};

handler.help = ['bingimg2'];
handler.tags = ['AI'];
handler.command = ['dalle2', 'bingimg2'];
export default handler;
