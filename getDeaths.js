const fetch = require('node-fetch');
const apiEndpoint = 'https://maplelegends.com/ranking/deaths?search=';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const getDeathCount = async function (searchedIgn) {
  try {
    let url = `${apiEndpoint}${searchedIgn}`;
    let options = {
      method: 'GET',
      headers: {
        cookie: 'webpy_session_id=f408ce073e2bd0b0fe8925b959dd93abbded75f0; mlTheme=light; ',
      },
    };
    let response = await fetch(url, options);

    let textResponse = await response.text();

    const dom = new JSDOM(`${textResponse}`);

    let tableText = dom.window.document
      .querySelector('table')
      .textContent.split('\n')
      .filter((element) => {
        if (element.trim() !== '') {
          return element;
        }
      });

    let results = {};
    let currentChar = {};

    // loop through table data
    for (let i = 0; i < tableText.length; i++) {
      let currentElement = tableText[i];
      const ignRegex = /\/api\/getavatar\?name=[A-Za-z0-9]+"/g;
      const expRegex = /[0-9.]+?%/g;

      // use regex to find ign
      if (currentElement.match(ignRegex)) {
        // save currentChar into results before we reset
        if (currentChar['ign']) {
          results[currentChar['ign']] = currentChar['deaths'];
        }
        // new ign found, so we want to reset currentChar
        currentChar = {};
        let unsanitizedIgn = currentElement.split('=')[2];

        let cleanIgn = unsanitizedIgn.slice(0, unsanitizedIgn.length - 2);

        currentChar['ign'] = cleanIgn;
      }
      // use regex to find exp
      // EDGE CASE FOR LEVEL 200'S
      if (currentElement.match(expRegex) || currentElement.match(200)) {
        // the next element in the array will be death count
        if (!currentChar['deaths']) {
          currentChar['deaths'] = tableText[i + 1];
        }
      }
    }
    // save last character to results
    results[currentChar['ign']] = currentChar['deaths'];

    let finalResponse = `Results for death search on ${searchedIgn}\n`;

    for (const [ign, deaths] of Object.entries(results)) {
      finalResponse += `${ign} died ${deaths} time(s).\n`;
    }

    if (Object.keys(results).length === 1 && Object.keys(results)[0] === 'undefined') {
      finalResponse = 'Character not found';
    } else if (Object.keys(results).length === 5) {
      finalResponse +=
        "If you don't see your IGN here...adjust the IGN you're looking for.\nOr die more so you hit top 5...\nOr get a namechange to a more unique IGN.";
    }

    return finalResponse;
  } catch (error) {
    console.log('error in getDeath.js', error);
  }
};

getDeathCount('kumquats');
module.exports = {
  getDeathCount,
};
