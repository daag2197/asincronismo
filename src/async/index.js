const somethingWillHappend = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!');
        }else{
            reject('!Opps');
        }
    });
};


const Async = async () => {
    try{
        const test = await somethingWillHappend();
        console.log(test);
    }catch(err){
        console.error(err)
    }
}

Async();