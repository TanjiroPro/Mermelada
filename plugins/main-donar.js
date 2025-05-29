
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONACION*
puedes donar si quieres ayudar a mantener el bot activo

▢ *Yape :*
+51 936 994 155
`
let img = 'https://qu.ax/WlGmt.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m, null, rcanal)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.tags = ['main']
handler.help = ['donar']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler