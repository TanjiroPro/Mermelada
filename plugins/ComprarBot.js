const handler = async (m, {conn}) => {
  m.reply(global.ComprarBot);
};
handler.command ='comprarbot',/^(ComprarBot|Comprar|comprar|ComprarBot)$/i;
export default handler;
handler.tags = ['main']
handler.help = ['comprarbot']

global.ComprarBot = `
_*Deseas Comprar Mermelada Bot 💖?*_

_*Vendedora Oficial ::*_
- _*Mermelada*_ :: +52 747 257 5884

- *_Grupo Ofc Ventas_* :: https://chat.whatsapp.com/KqyCD7J3Xc59SnHKVS51MV 
`;