// Soal 1

console.log('Soal 1')
console.log('------------------------------------')

var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
var objDaftarPeserta= {}

objDaftarPeserta.nama = arrayDaftarPeserta[0]
objDaftarPeserta["Jenis Kelamin"] = arrayDaftarPeserta[1]
objDaftarPeserta.hobi = arrayDaftarPeserta[2]
objDaftarPeserta["Tahun Lahir"] = arrayDaftarPeserta[3]


console.log(objDaftarPeserta)


console.log(" ")

// Soal 2

console.log('Soal 2')
console.log('------------------------------------')


/* uraikan data dibawah ini menjadi array of object dan munculkan data yang tidak memiliki biji
1.nama: Nanas
  warna: Kuning
  ada bijinya: tidak
  harga: 9000 
2.nama: Jeruk
  warna: Oranye
  ada bijinya: ada
  harga: 8000
3.nama: Semangka
  warna: Hijau & Merah
  ada bijinya: ada
  harga: 10000
4.nama: Pisang
  warna: Kuning
  ada bijinya: tidak
  harga: 5000
*/

var arrobjBuah = [{
    nama: 'Nanas',
    warna: 'Kuning',
    'ada bijinya': 'tidak',
    harga: 9000
},{
    nama: 'Jeruk',
    warna: 'Oranye',
    'ada bijinya': 'ada',
    harga: 8000
},{
    nama: 'Semangka',
    warna: 'Hijau & Merah',
    'ada bijinya': 'ada',
    harga: 10000
},{
    nama: 'Pisang',
    warna: 'Kuning',
    'ada bijinya': 'tidak',
    harga: 5000
}]

var buahtakberbiji = arrobjBuah.filter(function(item){
    return item['ada bijinya'] == 'tidak'
})

console.log(buahtakberbiji)

console.log(" ")

// Soal 3

console.log('Soal 3')
console.log('------------------------------------')

var dataFilm = []

function tambahDataFilm(title,duration,gnr,rilis){
    var objFilm = {judul:title,durasi:duration,genre:gnr,tahun:rilis}
    dataFilm.push(objFilm)
}


tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")

console.log(dataFilm)


console.log(" ")

// Soal 4

console.log('Soal 4')
console.log('------------------------------------')

var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

var peopleFiltered = people.filter(function(item){
    return item.gender == "male" && item.age >29
})

console.log(peopleFiltered)

console.log(" ")


// Soal 5

console.log('Soal 5')
console.log('------------------------------------')

var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

var sum = 0
people.forEach(function(item){
    sum+=item.age
    avg = sum/people.length
    return avg
})

console.log(avg)


console.log(" ")


// Soal 6

console.log('Soal 6')
console.log('------------------------------------')

var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]


people.sort(function(a,b){return a.age-b.age})

people.forEach(function(item,index){
    console.log(index+1+". "+item.name)
})



console.log(" ")


// Soal 7

console.log('Soal 7')
console.log('------------------------------------')


var phone = {
  name: "Samsung Galaxy Note 20",
  brand: "Samsung",
  colors: ["Black"],
  release: 2020
}

function addColors(warna){
    warnas = phone.colors.push(warna)
}

addColors("Gold")
addColors("Silver")
addColors("Brown")

console.log(phone)


console.log(" ")



