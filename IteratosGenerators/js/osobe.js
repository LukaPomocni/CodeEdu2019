
function createPerson(ime, prezime, pol, godina){
    person = {ime:ime,
              prezime:prezime,
              pol:pol,
              godina:godina}

    person[Symbol.iterator] = function* () {
        yield this.ime
        yield this.prezime
        yield this.godina
        yield this.pol
    }

    return person
}

let persons = []
persons.push(createPerson("Pera", "Peric", 'm', 53));
persons.push(createPerson("John", "Doe", 'm', 33));
persons.push(createPerson("Jane", "Peric", 'm', 46));

for(p of persons){
    // console.log([...p])
    for(info of p){
        console.log(info)
    }
}
