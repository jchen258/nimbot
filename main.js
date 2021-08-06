const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

let sujungSuxCount = 0;
let sujungDeathCount = 0;
let izzyCount = 0;

client.on('message', (msg) => {
  // if (msg.content.includes('addsujungdeath')) {
  //   sujungDeathCount++;
  //   msg.channel.send('added!');
  // }
  // if (msg.content.includes('showsujungdeath')) {
  //   // sujung's user id
  //   msg.channel.send(`<@497640446328307713> died ${sujungDeathCount} time(s)`);
  // }

  if (msg.content.includes('izzy')) {
    izzyCount++;
    msg.channel.send(`i love <@399654371450683402> ${izzyCount} time(s)!!!`);
  }
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
  if (msg.content.includes('lemow')) {
    sujungSuxCount++;
    // sujung's user id
    msg.channel.send(`<@497640446328307713> is it LEMOW or LEMAYO`);
  }
  if (msg.content.includes('lemayo')) {
    sujungSuxCount++;
    // sujung's user id
    msg.channel.send(`<@497640446328307713> it\'s LEMOW`);
  }
  if (msg.content.includes('scam')) {
    // semi's user id
    msg.channel.send('<@113515798785507328> semi is skemi');
  }
  if (msg.content.includes('cheers')) {
    msg.channel.send('<@&782473519690022963>');
  }
});

client.on('interactionCreate', (interaction) => {
  console.log(interaction);
});

client.login(process.env.TOKEN);
