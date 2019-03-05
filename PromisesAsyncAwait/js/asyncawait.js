'use strict'

function resolveAfter(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved '+x);
      }, x*1000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    var r1 = await resolveAfter(3);
    console.log(r1)
    var r2 = await resolveAfter(2);
    console.log(r2)
    var r3 = await resolveAfter(1);
    console.log(r3)

    return r1+ ' ' + r2+' '+r3
  }
  
  asyncCall().then(data => console.log(data))