
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
_*🕹️ LISTA DE INTERNA 4vs4🕹️*_

———————————————
💸 *INTERNA C1* 💸

*• JUGADORXS •*
👥
👥
👥
👥

*• SUPLENTES •*
👥
👥
————————————
💸 *INTERNA C2* 💸

*• JUGADORXS •*
👥
👥
👥
👥

*• SUPLENTES •*
👥
👥
`
let img = 'https://qu.ax/GvsoD.png'
conn.sendFile(m.chat, img, 'img.jpg', don, m, null, rcanal)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['vs4 - Lista De Interna 4vs4']
handler.tags = ['free']
handler.command = ['vs4'] 

export default handler