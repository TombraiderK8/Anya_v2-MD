module.exports = {
    cmdName: () => ({
        name: ['fullpp'],
        alias: ['botfullpp','fullbotpp'],
        react: '🌀',
        need: 'image',
        desc: 'Get full profile picture for bot'
    }),
    getCommand: async (userOwner, userSudo, anyaV2, pika, prefix, command) => {
    const _0x55f89a=_0x46cf;(function(_0x5b08ab,_0x13a6b8){const _0x5f4d63=_0x46cf,_0x493156=_0x5b08ab();while(!![]){try{const _0x3bfab1=-parseInt(_0x5f4d63(0x12a))/0x1*(parseInt(_0x5f4d63(0x13e))/0x2)+parseInt(_0x5f4d63(0x128))/0x3+-parseInt(_0x5f4d63(0x13a))/0x4*(parseInt(_0x5f4d63(0x13c))/0x5)+-parseInt(_0x5f4d63(0x12e))/0x6+-parseInt(_0x5f4d63(0x122))/0x7+parseInt(_0x5f4d63(0x140))/0x8*(-parseInt(_0x5f4d63(0x120))/0x9)+parseInt(_0x5f4d63(0x131))/0xa*(parseInt(_0x5f4d63(0x144))/0xb);if(_0x3bfab1===_0x13a6b8)break;else _0x493156['push'](_0x493156['shift']());}catch(_0x3d674a){_0x493156['push'](_0x493156['shift']());}}}(_0x5f51,0x374d4));function _0x5f51(){const _0x37ecc1=['quoted','getHeight','sendMessage','getWidth','695439VsWHkG','crop','1wdUZYL','*\x20or\x20tag\x20an\x20image\x20to\x20set\x20as\x20the\x20bot\x27s\x20profile\x20picture.','image','query','2271630iQobeq','owner','read','4928650FtUDfO','reply','scaleToFit','test','message','set','msg','download','MIME_JPEG','4JXqgHW','key','1411945ytrouz','catch','754834jZyXqo','chat','56EUUCMP','picture','Send\x20an\x20image\x20with\x20caption\x20*','getBufferAsync','33rAKPWD','edit','error','w:profile:picture','user','../../config','normalize','mediaType','432387KHsgUg','mimetype','764260KwwBaI','decodeJid'];_0x5f51=function(){return _0x37ecc1;};return _0x5f51();}function _0x46cf(_0x8956ff,_0x5ec1fb){const _0x5f511e=_0x5f51();return _0x46cf=function(_0x46cf2c,_0x393e80){_0x46cf2c=_0x46cf2c-0x11c;let _0x5cf415=_0x5f511e[_0x46cf2c];return _0x5cf415;},_0x46cf(_0x8956ff,_0x5ec1fb);}const Config=require(_0x55f89a(0x11d));if(!userOwner&&!userSudo)return pika['reply'](Config[_0x55f89a(0x135)][_0x55f89a(0x12f)]);const quoted=pika[_0x55f89a(0x124)]||pika,mime=quoted[_0x55f89a(0x137)]||quoted[_0x55f89a(0x121)]||quoted[_0x55f89a(0x11f)]||'';if(/image/g[_0x55f89a(0x134)](mime)&&!/webp/g[_0x55f89a(0x134)](mime)){const proceed=await anyaV2[_0x55f89a(0x126)](pika[_0x55f89a(0x13f)],{'text':Config[_0x55f89a(0x135)]['wait']},{'quoted':pika});try{const media=await quoted[_0x55f89a(0x138)](),botNumber=await anyaV2[_0x55f89a(0x123)](anyaV2[_0x55f89a(0x11c)]['id']),{preview}=await copyKarneWaleKiMKB(media);await anyaV2[_0x55f89a(0x12d)]({'tag':'iq','attrs':{'to':botNumber,'type':_0x55f89a(0x136),'xmlns':_0x55f89a(0x147)},'content':[{'tag':_0x55f89a(0x141),'attrs':{'type':_0x55f89a(0x12c)},'content':preview}]})[_0x55f89a(0x13d)](_0x823286=>{const _0x5bc6f3=_0x55f89a;return console[_0x5bc6f3(0x146)](_0x823286),pika[_0x5bc6f3(0x145)](Config[_0x5bc6f3(0x135)][_0x5bc6f3(0x146)],proceed['key']);}),pika[_0x55f89a(0x145)](Config[_0x55f89a(0x135)]['success'],proceed[_0x55f89a(0x13b)]);}catch(_0x68b8c3){console['error'](_0x68b8c3),pika[_0x55f89a(0x145)]('❌\x20An\x20error\x20occurred,\x20try\x20again.',proceed['key']);}}else pika[_0x55f89a(0x132)](_0x55f89a(0x142)+(prefix+command)+_0x55f89a(0x12b));async function copyKarneWaleKiMKB(_0x2ff8d9){const _0x3cc74c=_0x55f89a,_0x43c85e=require('jimp'),_0x1d3243=await _0x43c85e[_0x3cc74c(0x130)](_0x2ff8d9),_0x5794a2=_0x1d3243[_0x3cc74c(0x127)](),_0x2107e5=_0x1d3243[_0x3cc74c(0x125)](),_0xd82b00=_0x1d3243[_0x3cc74c(0x129)](0x0,0x0,_0x5794a2,_0x2107e5);return{'img':await _0xd82b00[_0x3cc74c(0x133)](0x2d0,0x2d0)[_0x3cc74c(0x143)](_0x43c85e[_0x3cc74c(0x139)]),'preview':await _0xd82b00[_0x3cc74c(0x11e)]()['getBufferAsync'](_0x43c85e['MIME_JPEG'])};}
    }
}