let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let url = 'https://rickandmortyapi.com/api/character/';

function fetchData(urlApi,callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET',urlApi,true);
    xhttp.onreadystatechange = function (event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null,JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error' + urlApi);
                return callback(error,null);
            }
        }
    }
    xhttp.send();
}


fetchData(url,function(err,res){
    if(err) return console.error(err);
    fetchData(url + res.results[0].id,function(err1,res1){
        if(err1) return console.error(err1);
        fetchData(res1.origin.url,function(err2,res2){
            if(err2) return console.error(err);
            console.log(res.info.count);
            console.log(res1.name);
            console.log(res2.dimension);
        });
    });
});