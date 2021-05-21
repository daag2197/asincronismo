const somethingWillHappend = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!');
        }else{
            reject('!Opps');
        }
    });
};

somethingWillHappend()
.then(doc => console.log(doc))
.catch(err => console.log(err));

const somethingWillHappend2 = () =>{
    return new Promise((resolve,reject) => {
        if(true){
            setTimeout(() =>{
                resolve('Pasaron 2 segundos');
            },2000)
        }
        else{
            const error = new Error('Ocurrio algo malo')
            reject(error);
        }
    });
}

somethingWillHappend2()
.then(doc => console.log(doc))
.catch(err => console.error(err));

Promise.all([somethingWillHappend(),somethingWillHappend2()])
.then(doc => {
    console.log(doc);
})
.catch(err => {
    console.error(err);
})


console.log('Soy mas rapido que las promesas');