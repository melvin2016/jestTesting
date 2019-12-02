const fetch = require('node-fetch');

function fetchNewsData(){
    return new Promise((res, rej)=>{
        fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-11-02&sortBy=publishedAt&apiKey=a596544ac7c9405dadaba5f02f54c6ee')
            .then(resp => resp.json())
            .then(json => {
                res(json);
            })
            .catch(err => {
                rej(err);
            });
    })
    
}

module.exports = fetchNewsData;
