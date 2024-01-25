// Soal 1

console.log('Soal 1')
console.log('------------------------------------')

const pi = 22/7
const luaslingkaran = (r) => {
    return pi*r**2
}
const KelilingLingkaran = (r) => {
    return 2*pi*r
}

console.log(luaslingkaran(5))
console.log(KelilingLingkaran(1))


console.log(" ")


// Soal 2

console.log('Soal 2')
console.log('------------------------------------')

const introduce = (...rest) => {
    let [name,age,gender,job] = rest
    if (gender === "Perempuan"){
        return `bu ${name} adalah seorang ${job} yang berusia ${age} tahun`
    }else{
        return `pak ${name} adalah seorang ${job} yang berusia ${age} tahun`
    }
    
}


//kode di bawah ini jangan dirubah atau dihapus
const perkenalanJohn = introduce("john", "30", "Laki-Laki", "penulis")
console.log(perkenalanJohn) // Menampilkan "pak john adalah seorang penulis yang berusia 30 tahun"

//kode di bawah ini jangan dirubah atau dihapus 
const perkenalanSarah = introduce("sarah", "28", "Perempuan", "guru") 
console.log(perkenalanSarah) // Menampilkan "bu sarah adalah seorang penulis yang berusia 30 tahun"

console.log(" ")

// Soal 3

console.log('Soal 3')
console.log('------------------------------------')

const newFunction = (firstName, lastName)=>{
    const fullName = ()=>{
        console.log(firstName + " " + lastName)}
    return {
        firstName,lastName,fullName
        }
    
}
  
// kode di bawah ini jangan diubah atau dihapus sama sekali
console.log(newFunction("John", "Doe").firstName)
console.log(newFunction("Richard", "Roe").lastName)
newFunction("William", "Imoh").fullName()


console.log(" ")

// Soal 4

console.log('Soal 4')
console.log('------------------------------------')

let phone = {
   name: "Galaxy Note 20",
   brand: "Samsung",
   year: 2020,
   colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

const {name,brand,year,colors} = phone
let phoneBrand = brand
let phoneName = name

console.log(phoneName)

const [colorBronze,colorWhite,colorBlack] = colors

// kode di bawah ini jangan dirubah atau dihapus
console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)


console.log(" ")

// Soal 5

console.log('Soal 5')
console.log('------------------------------------')

let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

let tambahWarna = [...buku.warnaSampul,...warna]
buku.warnaSampul = tambahWarna

let newBuku = {
...buku,...dataBukuTambahan
}

console.log(newBuku)

console.log(" ")

// Soal 6

console.log('Soal 6')
console.log('------------------------------------')

const addProducts = (produk,newproduk)=>{
    let listproduk = [...produk.products,...newproduk]
    return listproduk
}

let samsung ={
 name: "Samsung",
 products :[
  {name: "Samsung Galaxy Note 10", colors: ["black", "gold", "silver"]},
  {name: "Samsung Galaxy Note 10s", colors: ["blue", "silver"]},
  {name: "Samsung Galaxy Note 20s", colors: ["white", "black"]}
 ] 
}

let newProducts = [
 {name: "Samsung Galaxy A52", colors: ["white", "black"]},
 {name: "Samsung Galaxy M52", colors: ["blue", "grey", "white"]}
]

samsung = addProducts(samsung, newProducts)

console.log(samsung)


console.log(" ")

// Soal 7

console.log('Soal 7')
console.log('------------------------------------')

let data = ["Bondra", "Medan", 25]

const [nama,domisili,umur] = data

const listobj = (nama,domisili,umur)=>{
    const obj ={nama,domisili,umur}
    return obj
}


console.log(listobj(nama,domisili,umur))
// Output 
// { "nama" : "Bondra", "domisili": "Medan", "umur": 25 }



console.log(" ")

// Soal 8

console.log('Soal 8')
console.log('------------------------------------')

const graduate = (...rest)=>{
    // let p = rest.filter(elm => elm.class !== 'vuejs')
    
    rest.forEach((item,index)=>{
        console.log(item[index].name)
    })
}


// TEST CASES
 const data1 = [
  { name: "Ahmad", class: "adonis"},
  { name: "Regi", class: "laravel"},
  { name: "Bondra", class: "adonis"},
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "laravel" }
]

const data2 = [
  { name: "Yogi", class: "react"},
  { name: "Fikri", class: "agile"},
  { name: "Arief", class: "agile"}
]

graduate(data1)

console.log(graduate(data1))
// Output 
// {
//   "adonis": [ "Ahmad", "Bondra" ],
//   "laravel": [" Regi", "Putri"], 
//   "vuejs": ["Iqbal"]
// }

console.log(graduate(data2)) 
// Output
// {
//   "react": ["Yogi"],
//   "agile": ["Fikri", "Arief"]
// }



console.log(" ")



