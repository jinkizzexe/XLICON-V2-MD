import fetch from 'node-fetch';
import displayLoadingScreen from '../lib/loading.js'

const endpoint = 'https://v2-guru-indratensei.cloud.okteto.net/perplexity?query=';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  try {
    if (!text && !(m.quoted && m.quoted.text)) {
      throw `قل ماتريد التكلم عنه... \n instagram \n https://www.instagram.com/ovmar_1 \n Whatsapp GP \n https://chat.whatsapp.com/EtvWb5preas43EOZNqALjx`;
    }

    if (!text && m.quoted && m.quoted.text) {
      text = m.quoted.text;
    } else if (text && m.quoted && m.quoted.text) {
      text = `${text} ${m.quoted.text}`;
      if (m.quoted.text.includes('.aisearch')) {
        text = text.replace('.aisearch', ''); // 
      }
    }
    await displayLoadingScreen(conn, m.chat)
    conn.sendPresenceUpdate('composing', m.chat);
    let emsg = await conn.sendMessage(m.chat, {text: 'جاري إنشاء النص .. \n instagram \n https://www.instagram.com/ovmar_1 \n Whatsapp GP \n https://chat.whatsapp.com/EtvWb5preas43EOZNqALjx'})
    const prompt = encodeURIComponent(text);

    const response = await fetch(endpoint + prompt);

    if (!response.ok) {
      throw `خطاء في إنشاء النص..: ${response.status} - ${response.statusText}`;
    }

    const data = await response.json();
    const result = data.response.trim(); 
    await conn.relayMessage(m.chat, {
        protocolMessage: {
          key: emsg.key,
          type: 14,
          editedMessage: {
            conversation: result 
          }
        }
      }, {})
  } catch (error) {
    console.error('Error:', error);
    m.reply(`An error occurred while processing your request. Please try again later.`);
  }
};
handler.help = ['aisearch']
handler.tags = ['AI']
handler.command = ['aisearch', 'ai2']; 


export default handler;
