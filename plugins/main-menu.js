import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

const textCyberpunk = (text) => {
  const charset = {
    a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ꜰ', g: 'ɢ',
    h: 'ʜ', i: 'ɪ', j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ',
    o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 'ꜱ', t: 'ᴛ', u: 'ᴜ',
    v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ'
  }
  return text.toLowerCase().split('').map(c => charset[c] || c).join('')
}

let tags = {
  'main': textCyberpunk('info'),
  'owner': textCyberpunk('creador'),
  'group': textCyberpunk('grupos'),
  'comprarbot': textCyberpunk('Mafia Bot'),
}

const defaultMenu = {
  before: `╔═━━━━✦❘ 𝕸𝖊𝖗𝖒𝖊𝖑𝖆𝖉𝖆 ❘✦━━━━═╗
│ 💖 *_Usuario ::_* %name
│ 💖 *_Nivel ::_* %level
│ 💖 *_Exp:_* %exp / %maxexp
│ 💖 *_Usuarios ::_* %totalreg
│ 💖 *_Modo ::_* %mode
│ 💖 *_Tiempo Activo ::_* %muptime
╚═━━━━✦❘ 𝕸𝖊𝖗𝖒𝖊𝖑𝖆𝖉𝖆 ❘✦━━━━═╝

%readmore
`.trimStart(),

  header: '\n╔═━━━━✦〔 💖 %category 〕✦━━━━═╗',
  body: '│ 💖 %cmd\n',
  footer: '╚═━━━━✦❘  𝕸𝖊𝖗𝖒𝖊𝖑𝖆𝖉𝖆  ❘✦━━━━═╝',
  after: '\n',
}

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let tag = `@${m.sender.split("@")[0]}`
    let { exp, level } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let _uptime = process.uptime() * 1000
    let _muptime = _uptime
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let mode = global.opts["self"] ? "Privado" : "Público"

    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => ({
      help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }))

    for (let plugin of help) {
      if (plugin && 'tags' in plugin) {
        for (let t of plugin.tags) {
          if (!(t in tags) && t) tags[t] = textCyberpunk(t)
        }
      }
    }

    const { before, header, body, footer, after } = defaultMenu

    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        const commands = help
          .filter(menu => menu.tags.includes(tag))
          .map(menu => menu.help.map(cmd => body.replace(/%cmd/g, menu.prefix ? cmd : _p + cmd)).join('\n'))
          .join('\n')
        return `${header.replace(/%category/g, tags[tag])}\n${commands}\n${footer}`
      }),
      after
    ].join('\n')

    let replace = {
      '%': '%',
      name,
      level,
      exp: exp - min,
      maxexp: xp,
      totalreg,
      mode,
      uptime,
      muptime,
      readmore: String.fromCharCode(8206).repeat(4001)
    }

    let text = _text.replace(/%(\w+)/g, (_, key) => replace[key] || '')

    // Mensaje inicial antes del menú
    await conn.sendMessage(m.chat, {
      text: `💖 *Iniciando Proyeto Mermelda*\n💖 *Proyecto Terminado*`,
      mentions: [m.sender]
    }, { quoted: m })

    await conn.sendMessage(m.chat, {
      image: { url: 'https://qu.ax/OLZSB.jpg' }, // Imagen existente
      caption: text,
      footer: ' 𝕸𝖊𝖗𝖒𝖊𝖑𝖆𝖉𝖆 ',
      buttons: [
        { buttonId: `${_p}owner`, buttonText: { displayText: 'Creador 💖' }, type: 1 },
        { buttonId: `${_p}grupos`, buttonText: { displayText: 'Grupos 💖' }, type: 1 },
        { buttonId: `${_p}comprarbot`, buttonText: { displayText: 'Comprar Mermelada 💖' }, type: 1 }
      ],
      viewOnce: true
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    conn.reply(m.chat, '❎ Error del sistema al generar el menú.', m)
  }
}

handler.help = ['menu', 'menú']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help', 'ayuda']
handler.register = false
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}