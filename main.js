const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  if (msg.content.includes('rach')) {
    msg.channel.send('Rachel Sux');
  }
  if (msg.content.includes('jas')) {
    msg.channel.send('Jason is da bes');
  }
});

client.login(process.env.TOKEN);
