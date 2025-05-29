
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
_*🕹️ LISTA DE INTERNA 6vs6🕹️*_

———————————————
💸 *INTERNA C1* 💸

*• JUGADORXS •*
👥
👥
👥
👥
👥
👥

*• SUPLENTES •*
👥
👥
👥

————————————
💸 *INTERNA C2* 💸

*• JUGADORXS •*
👥
👥
👥
👥
👥
👥

*• SUPLENTES •*
👥
👥
👥
`
let img = 'https://qu.ax/GvsoD.png'
conn.sendFile(m.chat, img, 'img.jpg', don, m, null, rcanal)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['vs6 - Lista De Interna 6vs6']
handler.tags = ['free']
handler.command = ['vs6'] 

export default handler