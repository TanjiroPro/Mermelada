
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
_*🕹️ LISTA DE ACTIVIDADES 🕹️*_

———————————————
💸 *BY MIXTO* 💸

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
💸 *BY MIXTO* 💸

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
💸 *BY MIXTO* 💸

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
💸 *BY MIXTO* 💸

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
💸 *BY MIXTO* 💸

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

handler.help = ['by - Lista De by']
handler.tags = ['free']
handler.command = ['by'] 

export default handler