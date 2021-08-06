const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

let sujungSuxCount = 0;
let sujungDeathCount = 0;

client.on('message', (msg) => {
  // if (msg.content.includes('addsujungdeath')) {
  //   sujungDeathCount++;
  //   msg.channel.send('added!');
  // }
  // if (msg.content.includes('showsujungdeath')) {
  //   // sujung's user id
  //   msg.channel.send(`<@497640446328307713> died ${sujungDeathCount} time(s)`);
  // }

  if (msg.content.includes('rach')) {
    // rachel's user id
    msg.channel.send('<@330549774434566156> sux');
  }
  if (msg.content.includes('jas')) {
    msg.channel.send('Jason is da bes');
  }
  if (msg.content.includes('dav')) {
    // david's user id
    msg.channel.send('<@691723931736080385> is a wimpy wimp');
  }
  if (msg.content.includes('suj')) {
    sujungSuxCount++;
    // sujung's user id
    msg.channel.send(
      `<@497640446328307713> is sus, she sucks ${sujungSuxCount} time(s)`
    );
  }
  if (msg.content.includes('scam')) {
    // semi's user id
    msg.channel.send('<@113515798785507328> semi is skemi');
  }
});

client.on('interactionCreate', (interaction) => {
  console.log(interaction);
});

client.login(process.env.TOKEN);
