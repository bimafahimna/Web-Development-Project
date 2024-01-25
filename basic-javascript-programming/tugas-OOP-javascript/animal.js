class Animal {
    constructor(name,legs=4,cold_blooded=false){
        this.name = name
        this.legs = legs
        this.cold_blooded = cold_blooded
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
sheep.legs = 3
console.log(sheep.legs)



// Code class Ape dan class Frog di sini
class Ape extends Animal {
    constructor(name,legs,cold_blooded){
        super(name,legs,cold_blooded)
    }
    yell(){
        console.log('Auooo')
    }
}

class Frog extends Animal {
    constructor(name,legs,cold_blooded){
        super(name,legs,cold_blooded);        
    }
    jump(){
        console.log('hop hop')
    }
}

console.log(" ")
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
sungokong.legs = 2
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)


console.log(" ")
var kodok = new Frog("buduk")
kodok.jump() // "hop hop"
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)



