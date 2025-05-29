const handler = async (m, { conn }) => {
  const texto = `
\`\`\`Grupo Mermelada Ventas    :\`\`\`


🔗 *Grupo oficial del bot:* https://chat.whatsapp.com/KqyCD7J3Xc59SnHKVS51MV
  `.trim()

  await conn.reply(m.chat, texto, m)
}

handler.help = ['script']
handler.tags = ['info']
handler.command = ['script']

export default handler
