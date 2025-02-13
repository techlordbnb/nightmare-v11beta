import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['2348114306897', 'Tio', true]
] 
global.mods = []
global.prems = []
// Info
global.nomorwa = '2348114306897'
global.nameown = 'Tioo'
global.nomerown = '2348114306897'
global.packname = 'sticker by '
global.author = 'N I G H T M A R E'
global.namebot = '乂 NightMare - MD'
global.wm = 'N I G H T M A R E  -  M D'
global.stickpack = 'Whatsapp'
global.stickauth = 'Bot - MD'
// Thumbnail 
global.ppKosong = 'https://i.ibb.co/3Fh9V6p/avatar-contact.png'
global.didyou = 'https://telegra.ph/file/fdc1a8b08fe63520f4339.jpg'
global.rulesBot = 'https://telegra.ph/file/afcfa712bd09f4fcf027a.jpg'
global.thumbnail = 'https://telegra.ph/file/babd38b23b90fe0462717.jpg'
global.thumb = 'https://telegra.ph/file/a88e0a16f999441bb79b3.jpg'
global.unReg = 'https://telegra.ph/file/ef02d1fdd59082d05f08d.jpg'
global.registrasi = 'https://telegra.ph/file/0169f000c9ddc7c3315ff.jpg'
global.confess = 'https://telegra.ph/file/03cabea082a122abfa5be.jpg'
global.access = 'https://telegra.ph/file/5051f762221c13abc965f.jpg'
global.tqto = 'https://telegra.ph/file/221aba241e6ededad0fd5.jpg'
global.spotify = 'https://telegra.ph/file/d888041549c7444f1212b.jpg'
global.weather = 'https://telegra.ph/file/5b35ba4babe5e31595516.jpg'
global.gempaUrl = 'https://telegra.ph/file/03e70dd45a9dc628d84c9.jpg'
global.akses = 'https://telegra.ph/file/6c7b9ffbdfb0096e1db3e.jpg'
// wel/good
global.wel = 'https://telegra.ph/file/9dbc9c39084df8691ebdd.mp4'
global.good = 'https://telegra.ph/file/1c05b8c019fa525567d01.mp4'
// Sosmed
global.sig = 'https://instagram.com/tulisan.ku.id'
global.sgh = '-'
global.sgc = '-'
// Donasi
global.psaweria = '-'
global.ptrakterr = '-'
global.pdana = '082285357346'
// Info Wait
global.wait = '𝑾𝒂𝒊𝒕𝒊𝒏𝒈 𝒇𝒐𝒓 𝒂 𝒎𝒊𝒏𝒖𝒕𝒆'
global.eror = '*An Error Occurred Try Again Later*!'
global.multiplier = 69
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
      let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
}

// Apikey
global.xyro = 'vRFLiyLPWu'
global.fxc = 'Frieren'
global.lol = 'GataDios' //GataDios
global.rose = 'Rk-83ba3adcfcc7af3b28ec46ec_free_tier'

global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    rose: "https://itsrose.life",
    fxc: "https://api-fxc7.cloud.okteto.net",
    lol: "https://api.lolhumaan.xyz"
}

//Apikey
global.APIKeys = {
    "https://api.xyroinee.xyz": "UnlimitedXyroineeKey",
    "https://itsrose.life": "Rk-83ba3adcfcc7af3b28ec46ec_free_tier",
    "https://api-fxc7.cloud.okteto.net": "Frieren",
    "https://api.lolhumaan.xyz": "GataDios"
    
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
