
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
_*🕹️ LISTA DE ACTIVIDADES 🕹️*_

———————————————
💸 *VV2 MIXTO* 💸

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
💸 *VV2 MIXTO* 💸

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
💸 *VV2 MIXTO* 💸

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
💸 *VV2 MIXTO* 💸

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
💸 *VV2 MIXTO* 💸

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

handler.help = ['vv2 - Lista De vv2']
handler.tags = ['free']
handler.command = ['vv2'] 

export default handler