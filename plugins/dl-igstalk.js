
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `قم باإرسال إسم الشخص..\n\n📌مثال: ${usedPrefix + command} Ovmar_1` 
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖رقم:* ${res.name} 
▢ *🔖إسم الحساب:* ${res.username}
▢ *👥يتابعه:* ${res.followersH}
▢ *🫂يتابع:* ${res.followingH}
▢ *📌سيرة:* ${res.description}
▢ *🏝️منشورات:* ${res.postsH}

▢ *🔗 رابط* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`

     await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
     
}
handler.help = ['igstalk']
handler.tags = ['downloader']
handler.command = ['igstalk'] 

export default handler
