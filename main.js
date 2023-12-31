const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const { getCharInfo } = require('./getCharInfo');
const { getDeathCount } = require('./getDeaths');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
let userMap = {
  sujung: '<@497640446328307713>',
  semi: '<@113515798785507328>',
};
let funcs = { '&deaths': 'getDeaths', '&stalk': 'getCharInfo', '&help': 'help' };

let sujungSuxCount = 0;
let izzyCount = 0;
let deathTracker = {};

client.on('message', (msg) => {
  if (msg.author.id !== '873093667479486505') {
    let splitMessage = msg.content.split(' ');
    let nimbotCalled = splitMessage[0][0] === '&' && funcs[splitMessage[0]];
    if (nimbotCalled) {
      switch (funcs[splitMessage[0]]) {
        case 'getCharInfo':
          const ign = splitMessage[1].toLowerCase();

          let getInfo = async function (ign) {
            let response = await getCharInfo(ign);
            msg.channel.send(response);
          };

          getInfo(ign);
          break;
        case 'getDeaths':
          let searchTerms = splitMessage[1];

          let getDeaths = async function (searchTerms) {
            let response = await getDeathCount(searchTerms);
            msg.channel.send(response);
          };
          getDeaths(searchTerms);
          break;
        case 'help':
          let helpMessage =
            'Thank you for using Nimbot! Here are some commands that may help!\n- &stalk <ign>: grabs basic information of a specific IGN\n- &deaths <ign>: Searches MapleLegends website for the death count of the ign. Please note, if the ign is not specific enough, it will only return the top 5 characters with the most deaths relating to that IGN. \nP.S. There are some easter eggs :eyes: :egg:';
          msg.channel.send(helpMessage);
          break;
        default:
      }
    }
    // }

    // console.log('first hit', msg.channel.guild.name);
    // if (msg.channel.guild.name) {
    //   console.log(msg.channel.guild.name !== 'Santi | Sanji');
    // }
    // if (splitMessage[0] === '&test') {
    // console.log('name component here', msg.author);
    //   msg.channel.send(`checking <@${msg.author.id}>`);
    // }

    // if (splitMessage[0] === 'checking') {
    //   console.log('checking name here', msg.mentions.users);
    // }

    // April fools Santi
    // if (msg.content.includes('santi') || msg.content.includes('sanji')) {
    //   msg.channel.send(
    //     "Hey Sanji, our superstar guild leader! I gotta say, your fame is spreading faster than a wildfire in a dry forest. you're like the Kim Kardashian of the gaming world! But instead of selfies, you're slaying dragons and leading our guild to greatness. can't believe we have such a famous guildleader"
    //   );
    // }

    // if (splitMessage[0] === '&died') {
    //   let person = splitMessage[1];
    //   console.log(person);
    //   if (person.includes('@')) {
    //     if (deathTracker[person]) {
    //       deathTracker[person] += 1;
    //     } else {
    //       deathTracker[person] = 1;
    //     }
    //     msg.channel.send('death recorded');
    //   } else {
    //     msg.channel.send('please @ a user');
    //   }
    // }

    // if (splitMessage[0] === '&showdeaths') {
    //   let person = splitMessage[1];

    //   if (person) {
    //     if (deathTracker[person]) {
    //       deathTracker[person] > 1
    //         ? msg.channel.send(
    //             `bimbo died ${deathTracker[person]} times! What a DUMMY! https://tenor.com/view/patrick-star-dumb-gif-20952040`
    //           )
    //         : msg.channel.send(`bimbo died ${deathTracker[person]} time!`);
    //     } else {
    //       msg.channel.send('Person has not died');
    //     }
    //   } else {
    //     msg.channel.send('please specify a person');
    //   }
    // }

    // tests code
    // if (Date().includes('00:16:57 GMT-0400')) {
    //   msg.channel.send('it is time to vote');
    // }

    // if (msg.content.includes('test')) {
    //   msg.channel.send(Date('THH:mm:ssZ'));
    // }
    // images code
    if (msg.content.includes('iykyk')) {
      msg.channel.send('https://tenor.com/view/terio-umm-nervous-anxious-what-gif-5205799');
    }
    if (msg.content.includes('dummy')) {
      msg.channel.send('https://tenor.com/view/patrick-star-dumb-gif-20952040');
    }

    if (msg.content === 'no u') {
      msg.channel.send('https://tenor.com/view/spider-man-we-one-gif-18212100');
    }
    // jokes code

    if (msg.content.includes('andy')) {
      msg.channel.send(`lllllliiIiiIiiiIIllIii||iiII|||`);
    }
    if (msg.content.includes('izzy')) {
      izzyCount += 1;
      msg.channel.send(`i love Izzy ${izzyCount} time(s)!!!`);
    }
    if (msg.content.includes('cap')) {
      izzyCount++;
      msg.channel.send(`NO CYAP`);
    }

    if (msg.content.includes('jason')) {
      msg.channel.send('Jason is da bes');
    }

    if (msg.content.toLowerCase().includes('suj')) {
      sujungSuxCount++;
      // sujung's user id
      msg.channel.send(`${userMap['sujung']} is sus, she sucks ${sujungSuxCount} time(s)`);
    }
    if (msg.content.includes('semi')) {
      msg.channel.send('SKEMI!!!!!');
    }
    if (msg.content.includes('lemow')) {
      sujungSuxCount++;
      // sujung's user id
      msg.channel.send(`is it LEMOW or LEMAYO`);
    }
    if (msg.content.includes('lemayo')) {
      sujungSuxCount++;
      // sujung's user id
      msg.channel.send(`it\'s LEMOW`);
    }

    if (msg.content.includes('cheers')) {
      msg.channel.send('<@&782473519690022963>');
    }
    if (msg.content.includes('kat')) {
      msg.channel.send("It's KatrinAA not KatrIIna");
    }
    if (msg.content.includes('korn')) {
      msg.channel.send('catch me licking my Korncob on Kornhub ;)');
    }
    if (msg.content.includes('blen')) {
      msg.channel.send('rattato');
    }
    if (msg.content.includes('bye nimbot')) {
      // dice should give values between 0 - 100
      let dice = Math.floor(Math.random() * 100);

      switch (true) {
        case dice < 50:
          msg.channel.send(
            'https://tenor.com/view/cry-sad-toy-story-woody-so-long-partner-gif-9797730'
          );
          break;
        case dice > 50:
          msg.reply('https://tenor.com/view/bye-friend-farewell-so-long-gif-25205750');
          break;
        default:
          msg.channel.send('https://tenor.com/view/bye-friend-farewell-so-long-gif-25205750');
          break;
      }
    }

    if (msg.content === 'i love nimbot') {
      let probability = Math.floor(Math.random() * 100);
      let userTag = `<@${msg.author.id}>`;

      switch (true) {
        case probability > 80:
          msg.channel.send(
            'https://tenor.com/view/2skoo-2skoo-run-bts-jimin-heart-jimin-love-jimin-saranghae-gif-21062629'
          );
          break;
        case probability > 60:
          msg.channel.send(`and i love ${userTag}!! <3i love nimbot`);
          break;
        case probability > 40:
          msg.channel.send(
            'https://tenor.com/view/the-simpsons-homer-exiting-uncomfortable-leaving-now-gif-14492345'
          );
        case probability <= 20:
          msg.channel.send('https://tenor.com/view/puppy-sending-love-gif-19432350');
          break;
        default:
          msg.channel.send('i love me too! <3');
      }
    }
  }
});

client.on('interactionCreate', (interaction) => {
  console.log(interaction);
});

client.login(process.env.TOKEN);
