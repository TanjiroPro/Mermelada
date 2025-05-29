
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
_*🕹️ LISTA DE ACTIVIDADES 🕹️*_

———————————————
💸 *APOS MIXTO* 💸

*6🇦🇷 5🇨🇱 4🇵🇪*
*• JUGADORXS •*
🚺
🚹
🚺
🚹

*• SUPLENTES •*
🚺
🚹
————————————
💸 *APOS MIXTO* 💸

*8🇦🇷 7🇨🇱 6🇵🇪*
*• JUGADORXS •*
🚺
🚹
🚺
🚹
*• SUPLENTES •*
🚺
🚺

————————————
💸 *APOS MIXTO* 💸

*10🇦🇷 9🇨🇱 8🇵🇪*
*• JUGADORXS •*
🚺
🚹
🚺
🚹
*• SUPLENTES •*
🚺
🚺

————————————
💸 *APOS MIXTO* 💸

*12🇦🇷 11🇨🇱 10🇵🇪*
*• JUGADORXS •*
🚺
🚹
🚺
🚹
*• SUPLENTES •*
🚺
🚺

————————————
💸 *APOS MIXTO* 💸

*02🇦🇷 01🇨🇱 12🇵🇪*
*• JUGADORXS •*
🚺
🚹
🚺
🚹
*• SUPLENTES •*
🚺
🚺
`
let img = 'https://qu.ax/GvsoD.png'
conn.sendFile(m.chat, img, 'img.jpg', don, m, null, rcanal)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['apos - Lista De Apos']
handler.tags = ['free']
handler.command = ['apos'] 

export default handler