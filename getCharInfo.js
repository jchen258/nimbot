const fetch = require('node-fetch');
const apiEndpoint = 'https://maplelegends.com/api/character';

// let url = 'https://maplelegends.com/api/character?name=stratus';

// let options = {
//   method: 'GET',
//   headers: {
//     cookie: 'webpy_session_id=f408ce073e2bd0b0fe8925b959dd93abbded75f0; mlTheme=light; '
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));

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

    let returnString = `${name} is a level ${level} ${job} in the guild ${guild}.`;
    // ${pronoun[0].toUpperCase()}${pronoun.slice(
    //   1
    // )} has about ${100 - parseFloat(exp)}% until ${pronoun} levels. Let's wish them luck!`;

    return returnString;
  } catch (e) {}
};

module.exports = {
  getCharInfo,
};
