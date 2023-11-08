//basic http module

const http = require('https');

http.get('https://www.boredapi.com/api/activity', (res) => {
    let data = '';

    res.on('data', (chunk)=> {
        data += chunk;
    })

    res.on('end', ()=> {
        console.log(JSON.parse(data));
        http.get('https://catfact.ninja/fact', (res) => {
            let data = '';
        
            res.on('data', (chunk)=> {
                data += chunk;
            })
        
            res.on('end', ()=> {
                console.log(JSON.parse(data));
            
            })
        }).on("error", (err)=> {
            console.log(err);
        })
    })
}).on("error", (err)=> {
    console.log(err);
})