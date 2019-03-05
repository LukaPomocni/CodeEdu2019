'use strict'

function napraviPromise(timeout, id){
    return new Promise(function(resolve, reject) {
        let uspeli = true;
    
        if(uspeli)
            setTimeout(resolve, 100*timeout, id);
        else
            reject("Nismo")
    });
}

let promises = []
for(let i=0; i<50; i++){
    let p = napraviPromise(50-i, i);
    p.then(data=>console.log(data)).catch(err=>console.log(err))

    promises.push(p);
}

Promise.all(promises).then(
    data => console.log("### " + data)
). catch(err => console.log(err));
