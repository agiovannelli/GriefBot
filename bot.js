require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(!msg.author.bot) {
        let splitMessageArray = msg.content.split(' '),
            readableString = '',
            readableStringsArray = [];

        splitMessageArray.forEach(function(token) {
            if(readableString.length >= 150) {
                readableStringsArray.push(readableString);
                readableString = '';
            }
            readableString = readableString.concat(token + ' ');
        });

        readableStringsArray.push(readableString);

        readableStringsArray.forEach(function(readableString) {
            msg.channel.send(readableString, {
                tts: true
            });
        });
    }
});

client.login(process.env.DISCORD_TOKEN);