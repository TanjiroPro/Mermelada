const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join``;
  const oi = `${pesan}`;
  let emot = `${pickRandom(['🔱', '💎', '🥰', '🙈', '👀', '💖', '⬟', '▢', '🥶', '🔱', '💵', '💲', '❤️‍🩹', '💓', '😍', '😈', '💀', '☠️'])}`
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
  let teks = `╭─────────\n│❏ 𝕳𝖔𝖑𝖆 𝖅𝖊𝖓 𝕭𝖔𝖙 𝕿𝖊 𝕰𝖘𝖙𝖆 𝕴𝖓𝖛𝖔𝖈𝖆𝖓𝖉𝖔 🌱\n│❏ 𝕸𝖎𝖊𝖒𝖇𝖗𝖔𝖘: *${participants.length}* ${oi}\n│❏ 𝖁𝖊𝖓𝖉𝖊𝖉𝖔𝖗𝖊𝖘 : .owner\n│\n`;
  for (const mem of participants) {
    teks += `│${emot} @${mem.id.split('@')[0]}\n`;
  }
  teks += `│\n╰𝕾𝖙𝖆𝖋𝖋 𝖅𝖊𝖓 𝕭𝖔𝖙`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = false;
handler.group = true;
export default handler;