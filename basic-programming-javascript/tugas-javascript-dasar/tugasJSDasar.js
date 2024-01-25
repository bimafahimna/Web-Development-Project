// Soal 1
console.log("Soal 1")
console.log("--------------------------------")

var perkenalan = 'Nama saya adalah ';
var nama = "Bima Fahimna. " // isi dengan nama masing-masing
var kata1 = "Saya ";
var kata2 = "berharap "
var kata3 = "untuk "
var kata4 = "menjadi "
var kata5 = "seorang "
var kata6 = "software "
var kata7 = "engineer"

var gabungan = perkenalan.concat(nama,kata1,kata2,kata3,kata4,kata5,kata6,kata7)

console.log(gabungan)
console.log(" ")
// Soal 2

console.log("Soal 2")
console.log("--------------------------------")

var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var angka = "0123456789"

// 1. password1 = "TES123"
var password1 = abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3]
console.log("password ke satu: " + password1)

// 2. password2 = "B3B3K"
var password2 = abjad[1] + angka[3] + abjad[1] + angka[3] + abjad[10]
console.log("password ke dua: "+ password2 )

// 3. password3 = "R4H4514"
var password3 = abjad[17] + angka[4] + abjad[7] + angka[4] + angka[5] + angka[1]+angka[4]
console.log("password ke tiga: " + password3)

console.log(" ")

// Soal 3

console.log("Soal 3")
console.log("--------------------------------")

var sentence2 = 'wow JavaScript is so cool';

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2= sentence2.substring(4, 14); // do your own!
var thirdWord2= sentence2.substring(15, 17); // do your own!
var fourthWord2= sentence2.substring(18, 20); // do your own!
var fifthWord2= sentence2.substring(21, 25); // do your own!

console.log('First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);

console.log(" ")

// Soal 4

console.log("Soal 4")
console.log("--------------------------------")

var sentence3 = 'wow JavaScript is so cool';

var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3= sentence3.substring(4, 14); // do your own!
var thirdWord3= sentence3.substring(15, 17); // do your own!
var fourthWord3= sentence3.substring(18, 20); // do your own!
var fifthWord3= sentence3.substring(21, 25); // do your own!

var firstWordLength = exampleFirstWord3.length
var secondwordlength = secondWord3.length
var thirdwordlength = thirdWord3.length
var fourthwordlength = fourthWord3.length
var fifthwordlength = fifthWord3.length


// lanjutkan buat variable lagi di bawah ini
console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord3+ ', with length: ' + secondwordlength);
console.log('Third Word: ' + thirdWord3+ ', with length: ' +thirdwordlength );
console.log('Fourth Word: ' + fourthWord3+ ', with length: ' + fourthwordlength);
console.log('Fifth Word: ' + fifthWord3+ ', with length: ' + fifthwordlength);

console.log(" ")

// Soal 5

console.log("Soal 5")
console.log("--------------------------------")

// Contoh:
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// 1. password pertama : HELLO
var kode1 = abjad.indexOf("H") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("O")
console.log("kode 1: " + kode1)

// 2. password kedua : WORLD
var kode2 = abjad.indexOf("W") + "-" + abjad.indexOf("O") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("D") // silakan lanjutkan sendiri
console.log("kode 2: " + kode2)

// 3. password ketiga : IMREADY
var kode3 = abjad.indexOf("I") + "-" + abjad.indexOf("M") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("A") + "-" + abjad.indexOf("D") + "-" + abjad.indexOf("Y") // silakan lanjutkan sendiri
console.log("kode 1: " + kode3)

console.log(" ")

// Soal 6

console.log("Soal 6")
console.log("--------------------------------")

var pertama = "saya ";
var kedua = "senang ";
var ketiga = "belajar ";
var keempat = "javascript";

// Output: Saya SenanG BelajaR JAVASCRIPT

var newpertama = pertama.replace('s','S')
var newkedua = kedua.replace('s','S').replace('g','G')
var newketiga = ketiga.replace('b','B').replace('r','R')
var newkeempat = keempat.toUpperCase()


var gabung1 = newpertama.concat(newkedua,newketiga,newkeempat)

console.log(gabung1)

console.log(" ")

// Soal 7

console.log("Soal 7")
console.log("--------------------------------")

var panjang= "12";
var lebar = "7";
var alas = "6";
var tinggi = "13";

var intpanjang = Number(panjang)
var intlebar = Number(lebar)
var intalas = Number(alas)
var inttinggi = Number(tinggi)

var luaspersegipanjang = intpanjang * intlebar
var luassegitiga = intalas * inttinggi/2

console.log("Luas Persegi Panjang: "+ String(luaspersegipanjang))
console.log("Luas Segitiga: "+ String(luassegitiga))

console.log(" ")

// Soal 8
console.log("Soal 8")
console.log("--------------------------------")

var sisi= " 1 2 ";
var jariJari= "7.5";

var newsisi = Number(sisi.replaceAll(" ",''))
var newjarijari = parseFloat(jariJari)

var luaspersegi = newsisi**2
var luaslingkaran = Math.PI*(newjarijari**2);

console.log("Luas Persegi: "+ String(luaspersegi))
console.log("Luas Lingkaran: "+String(luaslingkaran))

console.log(" ")




