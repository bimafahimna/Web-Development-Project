// Soal 1

console.log('Soal 1')
console.log('------------------------------------')


function hitungPersegi(sisi){
    function luas(s){return s*s}
    function keliling(s){return 4*s}
    console.log("Luas: "+luas(sisi))
    console.log("Keliling: "+keliling(sisi))
}

function HitungPersegiPanjang(panjang,lebar){
    function luas(p,l){return p*l}
    function keliling(p,l){return 2*p+2*l}
    console.log("Luas: "+luas(panjang,lebar))
    console.log("Keliling: "+keliling(panjang,lebar))
}

console.log("Hitung Persegi")
hitungPersegi(8)
console.log("")
console.log("Hitung Persegi Panjang")
HitungPersegiPanjang(12,7)


console.log(" ")


// Soal 2

console.log('Soal 2')
console.log('------------------------------------')

function hitungKubus(sisi){
    function volume(s){return s**3}
    function luaspermukaan(s){return 6*s**2}
    console.log("Volume :"+volume(sisi))
    console.log("Luas Permukaan :"+luaspermukaan(sisi))
}

function HitungBalok(panjang,lebar,tinggi){
    function volume(p,l,t){return p*l*t}
    function luaspermukaan(p,l,t){return (2*p*l)+(2*p*t)+(2*l*t)}
    console.log("Volume :"+volume(panjang,lebar,tinggi))
    console.log("Luas Permukaan :"+luaspermukaan(panjang,lebar,tinggi))
}

console.log("Hitung Kubus")
hitungKubus(8)
console.log("")
console.log("Hitung Balok")
HitungBalok(12,7, 5)


console.log(" ")



// Soal 3

console.log('Soal 3')
console.log('------------------------------------')

var temp

var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

function urutdata(object,i=object.length-1){
    var temp
    if (i==0){
        object.forEach(function(item,index){
            console.log(index+1+". "+item.name)
        })
        return
    }
    for (var j = i-1;j>= 0 ;j--){
        var o1 = object[j].age
        var o2 = object[i].age
        if (o1>o2){
            temp = object[j];
            object[j]=object[i]
            object[i]=temp
        }
    }
    return urutdata(object,i-1)
}

urutdata(people)


console.log(" ")


// Soal 4

console.log('Soal 4')
console.log('------------------------------------')

var phones=[
  {name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"]},
  {name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"]},
  {name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"]},
  {name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"]},
  {name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"]},
]

// function filterhp(hp,warna){
    
// }

var warnahp = phones.filter(function(item){
    return item.colors == "black"
})

var untukwarnahp = phones.forEach(function(item){
    console.log(item.colors)
})




console.log(" ")


// Soal 5

console.log('Soal 5')
console.log('------------------------------------')

var phones=[
  {name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"]},
  {name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"]},
  {name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"]},
  {name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"]},
  {name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"]},
]
 
/*
tulis jawaban anda disini 
*/ 

// console.log(phones)



console.log(" ")

