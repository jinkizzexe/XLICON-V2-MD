import axios from 'axios';

let handler = async (m, { conn, text }) => {
  if (!text) throw 'مالذي تريد البحث عنه في اليوتيوب .. \n instagram \n https://www.instagram.com/ovmar_1 \n Whatsapp GP \n https://chat.whatsapp.com/EtvWb5preas43EOZNqALjx?';

  try {
    const query = encodeURIComponent(text);
    const response = await axios.get(`https://weeb-api.vercel.app/ytsearch?query=${query}`);
    const results = response.data;

    if (results.length === 0) {
      throw 'النص الذي تبحث عنه غير موجود .. \n instagram \n https://www.instagram.com/ovmar_1 \n Whatsapp GP \n https://chat.whatsapp.com/EtvWb5preas43EOZNqALjx.';
    }

    const firstResult = results[0];

    const message = `
乂 ${firstResult.title}
乂 *Link* : ${firstResult.url}
乂 *Duration* : ${firstResult.timestamp}
乂 *Published :* ${firstResult.ago}
乂 *Views:* ${firstResult.views}

    `;

    conn.sendFile(m.chat, firstResult.thumbnail, 'yts.jpeg', message, m);
  } catch (error) {
    console.error(error);
    throw 'خطأ في تحميل الفيديو \n instagram \n https://www.instagram.com/ovmar_1 \n Whatsapp GP \n https://chat.whatsapp.com/EtvWb5preas43EOZNqALjx.';
  }
};

handler.help = ['ytsearch'];
handler.tags = ['downloader'];
handler.command = ['ytsearch', 'yts'];

export default handler;
