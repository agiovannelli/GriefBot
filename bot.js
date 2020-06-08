require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(!msg.author.bot) {
        msg.channel.send(msg.content, {
            tts: true
        });
    }
});

client.login(process.env.DISCORD_TOKEN);
