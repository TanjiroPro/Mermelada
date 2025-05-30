import fetch from 'node-fetch'

const iconsUrl = 'https://qu.ax/dUnCW.jpg'
const redesUrl = 'https://chat.whatsapp.com/JUraAM0lZyB89FXbsywP9m'

const fkontak = {
  key: {
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
    contactMessage: {
      displayName: 'Mermelada Bot',
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;@jxznr_szz;;;\nFN:Mermelada\nitem1.TEL;waid=51936994155:+52 747 257 5884\nEND:VCARD`,
    },
  },
}

export async function before(m, { conn }) {
  if (!m.messageStubType || !m.isGroup) return true

  const chat = global.db.data.chats[m.chat]
  if (!chat?.welcome) return true

  const vnWelcome = 'https://files.catbox.moe/or87jd.mp4'
  const vnBye = 'https://files.catbox.moe/51b21l.mp4'

  const getMentionedJid = () =>
    m.messageStubParameters.map((param) => `${param}@s.whatsapp.net`)

  const who = `${m.messageStubParameters[0]}@s.whatsapp.net`
  const user = global.db.data.users[who] || {}
  const userNameRaw = user.name || (await conn.getName(who))

  if (m.messageStubType === 27) {
    await conn.sendMessage(
      m.chat,
      {
        audio: { url: vnWelcome },
        contextInfo: {
          forwardingScore: 9999999,
          isForwarded: true,
          mentionedJid: getMentionedJid(),
          externalAdReply: {
            title: '𝕸𝖊𝖗𝖒𝖊𝖑𝖆𝖉𝖆 𝕭𝖔𝖙 💖\n𝕭𝖎𝖊𝖓𝖛𝖊𝖓𝖎𝖉𝖔 𝕬𝖑 𝕸𝖊𝖏𝖔𝖗 𝕲𝖗𝖚𝖕𝖔',
            body: `${userNameRaw} ha ingresado.`,
            previewType: 'PHOTO',
            thumbnailUrl: null,
            thumbnail: await (await fetch(iconsUrl)).buffer(),
            sourceUrl: redesUrl,
            showAdAttribution: true,
          },
        },
        ptt: true,
        mimetype: 'audio/mpeg',
        fileName: 'cyber-welcome.mp3',
      },
      { quoted: fkontak }
    )
  }

  if (m.messageStubType === 28 || m.messageStubType === 32) {
    await conn.sendMessage(
      m.chat,
      {
        audio: { url: vnBye },
        contextInfo: {
          forwardingScore: 9999999,
          isForwarded: true,
          mentionedJid: getMentionedJid(),
          externalAdReply: {
            title: '𝕸𝖊𝖗𝖒𝖊𝖑𝖆𝖉𝖆 𝕭𝖔𝖙 💖\n𝕰𝖘𝖕𝖊𝖗𝖔 𝕼𝖚𝖊 𝕹𝖔 𝖁𝖚𝖊𝖑𝖛𝖆𝖘 𝕮𝖙𝖒𝖗𝖊',
            body: `${userNameRaw} ha salido.`,
            previewType: 'PHOTO',
            thumbnailUrl: null,
            thumbnail: await (await fetch(iconsUrl)).buffer(),
            sourceUrl: redesUrl,
            showAdAttribution: true,
          },
        },
        ptt: true,
        mimetype: 'audio/mpeg',
        fileName: 'cyber-bye.mp3',
      },
      { quoted: fkontak }
    )
  }
}