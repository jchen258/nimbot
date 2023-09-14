const fetch = require('node-fetch');
const apiEndpoint = 'https://maplelegends.com/api/character';

const getCharInfo = async function (ign) {
  try {
    let url = `${apiEndpoint}?name=${ign}`;
    let options = {
      method: 'GET',
      headers: {
        cookie: 'webpy_session_id=f408ce073e2bd0b0fe8925b959dd93abbded75f0; mlTheme=light; ',
      },
    };

    let response = await fetch(url, options);

    let jsonResponse = await response.json();

    let { guild, name, level, gender, job, exp, quests, cards, donor, fame } = jsonResponse;

    let pronoun = gender === 'male' ? 'he' : 'she';

    if (Object.keys(jsonResponse).length <= 0) {
      return 'Character not found.';
    } else {
      let returnString = `${name} is a level ${level} ${job}.`;

      if (guild) {
        returnString += ` They are in the guild ${guild}.`;
      } else {
        returnString += ' They are currently not in a guild.';
      }

      return returnString;
    }
  } catch (e) {
    console.log('error in getCharInfo.js', e);
  }
};

module.exports = {
  getCharInfo,
};
