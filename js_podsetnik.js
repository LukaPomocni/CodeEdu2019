  /////////////
  // Logging //
  /////////////

  // Stilizovanje komentara css-om
  console.log('%c Logging', 'color: orange; font-weight: bold')

  // Ispis objekata tako da im imena budu vidljiva
  console.log({
      foo,
      bar
  })

  // Tabelarni ispis
  console.table([foo, bar])

  // Merenje vremena
  console.time('timer')
  for (let i = 0; i < 1000000; i++)
  ;
  console.timeEnd('timer')

  // Ispis citavog stacka odakle je pozvana funckija console.trace
  console.trace('stack trace!')


  ///////////////////////////////////////
  // String concat - template literals //
  ///////////////////////////////////////

  let name = 'Luka'

  // 💩
  let warningMessage = 'Hello ' + name + '. How are you?'

  // 👌
  let warningMessage = `Hello ${name}. How are you?`


  ///////////////////
  // Destructuring //
  ///////////////////

  // Ukoliko se mnogo puta ponavlja forma nazivObjekta.parametar,
  // moze se destruktuirati u samom argumentu funkcije
  // ili u telu funkcije

  function waterFlower(flower) {
      return `Water ${flower.name} that costs ${flower.cost}`
  }

  // argument
  function waterFlower({
      name,
      cost
  }) {
      return `Water ${name} that costs ${cost}`
  }

  // telo
  function waterFlower(flower) {
      const {
          name,
          cost
      } = flower;
      return `Water ${name} that costs ${cost}`
  }


  ///////////////////
  // Spread-syntax //
  ///////////////////

  const flower = {
      name: 'Rose'
  }
  const info = {
      cost: 50,
      quantity: 100
  }

  // 💩
  flower['cost'] = info.cost
  flower['quantity'] = info.quantity

  // 👌
  const newFlower = {
      ...flower,
      ...info
  }


  /////////////////////////
  // Spread-syntax Array //
  /////////////////////////

  const arr1 = ["Aconitum", "Agapanthus"]
  const arr2 = ["Alstroemeria", "Alyssum"]

  const flowers = [...arr2, "rose", ...arr1]


  ///////////
  // Loops //
  ///////////

  let total = 0
  let tax = []
  let lux = []

  pdv = 1 + .18

  // 💩
  for (i = 0; i < prices.length; i++) {
      // Sumiranje cena
      total += prices[i]

      // Racunanje taksi
      tax.push(prices[i] * pdv)

      // Izdvajanje velikih cena
      if (prices[i] > 100)
          lux.push(prices[i])
  }


  // 👌
  // Sledece funkcije su preuzete iz funkcionalnog programiranja
  // Sve sledece funckije primaju lambda funkcije i to:

  // Lambda prima 2 argumenta: acc i curr
  // acc ce nam biti povratna vrednost, dok curr ima vrednost
  // trenutnog elementa u nizu
  // u svakom koraku acc se menja na zadat nacin
  const total = prices.reduce((acc, curr) => acc + cur)

  // Lambda prima 1 argument:
  // v je trenutni element koji menja vrednost na zadat nacin
  const tax = prices.map(v => v * pdv)

  // Lambda prima jedan argument i vraca istinitosnu vrednost
  const lux = prices.filter(v => v > 100)