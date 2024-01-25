// Soal 1

console.log('Soal 1')
console.log('------------------------------------')


var sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";

if (sentence.length < 10){
    console.log("Pendek")
}else if (sentence.length >= 10 && sentence.length <= 30){
    console.log("Sedang")
}else if (sentence.length > 30){
    console.log("Panjang")
};

console.log(" ")

// Soal 2

console.log('Soal 2')
console.log('------------------------------------')

var nilai = 77;

if (nilai >= 80 ){
    console.log("Indeks: A")
}else if (nilai >= 70 && nilai < 80){
    console.log("Indeks: B")
}else if (nilai >= 60 && nilai < 70){
    console.log("Indeks: C")
}else if (nilai >= 50 && nilai < 60){
    console.log("Indeks: D")
}else if (nilai < 50 ){
    console.log("Indeks: E")
};

console.log(" ")

// Soal 3

console.log('Soal 3')
console.log('------------------------------------')

var tanggal = 15;
var bulan = 1;
var tahun = 2001;

switch(bulan) {
    case 1: {bulan = 'Januari'; break;}
    case 2: {bulan = 'Februari';break;}
    case 3: {bulan = 'Maret';break;}
    case 4: {bulan = 'April';break;}
    case 5: {bulan = 'Mei';break;}
    case 6: {bulan = 'Juni';break;}
    case 7: {bulan = 'Juli';break;}
    case 8: {bulan = 'Agustus';break;}
    case 9: {bulan = 'September';break;}
    case 10: {bulan = 'Oktober';break;}
    case 11: {bulan = 'November';break;}
    case 12: {bulan = 'Desember';break;}
    default: {console.log('Masukkan Bulan yang benar!')}
};

var tgl_lahir = String(tanggal)+" "+bulan+" "+String(tahun);

console.log(tgl_lahir)

console.log(" ")

// Soal 4

console.log('Soal 4')
console.log('------------------------------------')

var tahun_lahir = 1967; tahun_lahir >= 1944 ? tahun_lahir >= 1965 ? tahun_lahir >= 1980 ? tahun_lahir >= 1995 ? tahun_lahir > 2015 ?
console.log("Generasi tidak diketahui") :
console.log("Generasi Z") :
console.log("Generasi Y") :
console.log("Generasi X") :
console.log('Baby Boomer'):
console.log('Generasi tidak diketahui');


console.log(" ")

// Soal 5

console.log('Soal 5')
console.log('------------------------------------')

var penjualan = 2.5 *10**6

if (penjualan == 2*10**6){
    pendapatan = 10**5 + (penjualan*0.1)
}else if (penjualan > 2*10**6 && penjualan <= 5*10**6) {
    pendapatan = 2*10**5 + (penjualan*0.15)
}else if (penjualan > 5*10**6) {
    pendapatan = 3*10**5 + (penjualan*0.2)
}

console.log("Pendapatan Salesman dengan hasil penjualan "+String(penjualan)+" adalah "+String(pendapatan))

console.log(" ")




