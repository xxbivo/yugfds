const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("613881589910208515")
setInterval(function() {
channel.send(`هلا كيفكم ابي كريديت بيفو الافضل معا سريفر جايت بحبمك المرج مصر هلا كيفك `);
}, 30)
})

client.login(process.env.BOT_TOKEN);