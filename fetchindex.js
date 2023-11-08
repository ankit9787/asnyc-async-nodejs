const fetch = require('node-fetch');


async function getResponse()
{
  try {

    const response = await fetch('https://www.boredapi.com/api/activity')
    const response1 = await fetch('https://api.genderize.io?name=luc')
    const response2 = await fetch('https://catfact.ninja/fact')
    
    const json = await response.json()
    const json1 = await response1.json()
    const json2 = await response2.json()
    console.log(json2);

    console.log(json);

    console.log(json1);
  } catch (error) {
    console.log(error);
  }
}

getResponse()
