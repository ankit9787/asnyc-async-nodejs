// const axios = require('axios');

// axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//   .then(response => {
//     console.log(response.data.url);
//     console.log(response.data.explanation);
//   })
//   .catch(error => {
//     console.log(error);
//   });

const axios = require("axios");

axios.get('https://www.boredapi.com/api/activity')
.then((res)=> {
    console.log(res.data);
    getSecondAPI().
    then((res)=>{
        console.log(res.data)
        getThirdAPI()
    })

}).catch((err)=>{
    console.log(err);
})


function getSecondAPI(){
    return axios.get('https://api.genderize.io?name=luc')
}

function getThirdAPI(){
    axios.get('https://catfact.ninja/fact')
    .then((res)=> {
        console.log(res.data);
    }).catch((err)=>{
        console.log(err);
    })
}