'use strict'

function* vezbeGenerator() {
  while(true){
    yield 'deadlift';
    yield 'squat';
    yield 'deadlift';
    yield 'ohp';
    yield 'rows';
  }
}

var vezbe = vezbeGenerator();

let planTreninga = []
for(let i=1; i<=31;i++)
  planTreninga.push({'dan':i})

let vezbeNiz = ['deadlift',
          'squat',
          'deadlift',
          'ohp',
          'rows',
          ]
// for(let i=0; i<planTreninga.length; i++){
//   planTreninga[i].glavnaVezba = vezbeNiz[i % vezbeNiz.length]
// }

planTreninga.map(v => {
  v.glavnaVezba = vezbe.next().value
})

console.log(planTreninga)