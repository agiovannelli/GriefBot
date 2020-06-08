require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(!msg.author.bot) {
        if(msg.content.length > 180) {
            var splitMessage = msg.content.split(' ');

            var readableString = '';
            var readableStringsArray = [];
    
            splitMessage.forEach(function(token) {
                if(readableString.length >= 180) {
                    readableStringsArray.push(readableString);
                    readableString = '';
                    readableString = readableString.concat(token + ' ');
                } else {
                    readableString = readableString.concat(token + ' ');
                }
            });

            readableStringsArray.push(readableString);
    
            readableStringsArray.forEach(function(readableString) {
                msg.channel.send(readableString, {
                    tts: true
                });
            });
        } else {
            msg.channel.send(msg.content, {
                tts: true
            });
        }
    }
});

client.login(process.env.DISCORD_TOKEN);
