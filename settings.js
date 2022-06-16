//═══════════════════════════════════════════════════════//
//
//                              King-Bot 𝓫𝔂 patch777
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 Mille and Lyfe
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'd8bcfb256e', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['919605571339']
global.premium = ['919605571339']
global.ownernomer = '919605571339'
global.ownername = 'Patch Ser'
global.botname = 'Patch-bot'
global.footer = '©Patch-botInc.'
global.ig = 'https://github.com/patch777'
global.region = 'India, South India, Kerala'
global.sc = 'https://github.com/patch777'
global.myweb = 'https://youtu.be/hYWltm6BgEw'
global.packname = 'Patch'
global.author = '🐦Star Boy Patch'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Patch',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Patch!',
    group: 'Feature Used Only For Patch!',
    private: 'Features Used Only For Patch!',
    bot: 'This Feature Is Only For Patch',
    wait: 'Wait A minute...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Theern Myr',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = '&text='
global.fluming = 'https://i.imgur.com/ErRyJqa.jpeg'
global.flarun = 'https://i.imgur.com/ErRyJqa.jpeg'
global.flasmurf = 'https://i.imgur.com/ErRyJqa.jpeg'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
