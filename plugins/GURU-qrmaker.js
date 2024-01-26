import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `*قم بكتابة النص التي تريد تخويله الى QR ...\n instagram \n https://www.instagram.com/ovmar_1 \n Whatsapp GP \n https://chat.whatsapp.com/EtvWb5preas43EOZNqALjx*`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', 'هاذا هو رمز QR الخاص بك .. \n instagram \n https://www.instagram.com/ovmar_1 \n Whatsapp GP \n https://chat.whatsapp.com/EtvWb5preas43EOZNqALjx, m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <LEZWA>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i
export default handler
