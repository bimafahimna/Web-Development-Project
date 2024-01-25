// Soal 1

console.log('Soal 1')
console.log('------------------------------------')

function luasPersegiPanjang(panjang,lebar){
    return panjang*lebar
}
 
function kelilingPersegiPanjang(panjang,lebar){
    return (2*panjang)+(2*lebar)
}


function volumeBalok(panjang,lebar,tinggi){
    return panjang*lebar*tinggi
}

var panjang= 12
var lebar= 4
var tinggi = 8
 
var luasPersegiPanjang = luasPersegiPanjang(panjang, lebar)
var kelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar)
var volumeBalok = volumeBalok(panjang, lebar, tinggi)

console.log(luasPersegiPanjang) 
console.log(kelilingPersegiPanjang)
console.log(volumeBalok)



console.log(" ")

// Soal 2

console.log('Soal 2')
console.log('------------------------------------')

function introduce(name, gender, job, age){
    if (gender === "laki-laki"){
        var pronouns = "Pak"
    }else if (gender === "perempuan"){
        var pronouns = "Bu"
    }
    var print = pronouns+" "+name+" adalah seorang "+job+" yang berusia "+age+" tahun"
    return print
}



var john = introduce("John", "laki-laki", "penulis", "30")
console.log(john) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

var sarah = introduce("Sarah", "perempuan", "model", "28")
console.log(sarah) // Menampilkan "Bu Sarah adalah seorang model yang berusia 28 tahun"


console.log(" ")

// Soal 3

console.log('Soal 3')
console.log('------------------------------------')

function KarakterUnik(kalimat){
    var tampung = ""
    var banned = ""
    kalimat = kalimat.toLowerCase()
    for (var i = 0;i<kalimat.length;i++){
        if (tampung.indexOf(kalimat.charAt(i))<0 && banned.indexOf(kalimat.charAt(i))<0){
            tampung += kalimat.charAt(i)
        }else if (tampung.indexOf(kalimat.charAt(i))>=0){
            tampung = tampung.replace(kalimat.charAt(i),"")
            banned += kalimat.charAt(i)
        }
        
    }
    console.log(tampung)
    // console.log(banned)
}

var text = "Super Bootcamp Fullstack Dev 2022"

KarakterUnik(text)

// expected output: rbmfkdv0

console.log(" ")

// Soal 4

console.log('Soal 4')
console.log('------------------------------------')

function besarkecil(array){
    array.sort(function(a,b){return a-b})
    console.log("angka terbesar adalah "+array[array.length-1]+" dan angka terkecil adalah "+array[0])
}

var angka = [2,3,1,9,12,8,9,7]

besarkecil(angka)

// expected output: angka terbesar adalah 12 dan angka terkecil adalah 1

console.log(" ")


// Soal 5

console.log('Soal 5')
console.log('------------------------------------')

function panjangnama(namearr){
    var nama =""
    var new_namearr=[]
    for (i=0;i<namearr.length;i++){
        var clearwhite = namearr[i].replaceAll(" ","")
        if (clearwhite.length >= nama.length){
            nama = clearwhite
            new_namearr.push(namearr[i])
        }
    }
    for (var i = 0;i<new_namearr.length;i++){
        console.log(new_namearr[i])
    }
}


var names = ["John D Rockefeller", "Andrew Gillett", "Chris Sawyer", "David Walsh"]

panjangnama(names)

// expected output: John D Rockefeller


console.log(" ")

// Soal 6

console.log('Soal 6')
console.log('------------------------------------')

function arrangeString (str) {
    var strarray = str.split("")
    strarray.sort()
    strarray = strarray.join("")
    return strarray
}

// TEST CASE 
console.log(arrangeString("bahasa")) // Output : aaabhs
console.log(arrangeString("similikiti")) // Output : iiiiiklmst
console.log(arrangeString("sanbercode")) // Output : abcdeenors 
console.log(arrangeString("")) // Output : ""


console.log(" ")

// Soal 7

console.log('Soal 7')
console.log('------------------------------------')

function compressString(str) {
    var strarray = str.split("")
    strarray.sort()
    strarray = strarray.join("")
    
    var kompres=""
    var nmr=1
    for (var i = 0;i<strarray.length;i++){
        if (kompres.indexOf(strarray.charAt(i))<0){
            nmr=1
            kompres += strarray.charAt(i)+nmr
        }else{
            nmr+=1
        }
        kompres = kompres.slice(0,-1)+nmr
    }
    
    if (kompres.length < strarray.length){
        return kompres
    }else{
        return strarray
    }

 }
 
 // TEST CASES
 console.log(compressString("abrakadabra")) // a5b2d1k1r2
 console.log(compressString("aabcccccaaa")) // a5b1c5
 console.log(compressString("abdul")) // abdlu 
 console.log(compressString("maman")) // aamn



console.log(" ")

// Soal 8

console.log('Soal 8')
console.log('------------------------------------')

function palindrome(kata) {
  var len = kata.length
  for (var i = 0;i<len/2;i++){
    if (kata[i] !== kata[len-1-i]){
        return "false"
    }
    return "true"
  }


}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('nababan')); // true
console.log(palindrome('haji ijah')); // true
console.log(palindrome('mister')); // false


console.log(" ")

// Soal 9

console.log('Soal 9')
console.log('------------------------------------')

function angkaPalindrome(num) {
    var j = 1
    var new_num = num+1
    var kata = String(new_num)
    var len = kata.length
    while (j == 1){
        for (var i = 0;i<len/2;i++){
        if (kata[i] === kata[len-1-i]){
            j+=1
        }else{
            new_num +=1
            kata = String(new_num)
            break
        }
        
        } 
    }
    return new_num 
        
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001



console.log(" ")

// Soal 10

console.log('Soal 10')
console.log('------------------------------------')

function pasanganTerbesar(num) {
    var temp = 0
    var str=String(num)
    for (var i = 0;i<str.length;i++){
        new_str = str.slice(i,i+2)
        new_num = Number(new_str)
        if (new_num > temp){
            temp = new_num
            
        }
    }
    return temp
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99


console.log(" ")

// Soal 11

console.log('Soal 11')
console.log('------------------------------------')


function cekPermutasi(str1, str2) {
    var arr1 = str1.split("")
    var arr2 = str2.split("")
    arr1.sort()
    arr2.sort()


    for (var i = 0;i<arr1.length;i++){
        if (arr1[i] !== arr2[i]){
            return "false"
        }
    }
    
    return "true"
}

// TEST CASES
console.log(cekPermutasi("abah", "baha")) // true
console.log(cekPermutasi("ondel", "delon")) // true
console.log(cekPermutasi("paul sernine", "arsene lupin")) // true
console.log(cekPermutasi("taco", "taca")) // false


console.log(" ")

// Soal 12

console.log('Soal 12')
console.log('------------------------------------')

function urlify(str, length) {
    var new_str = str.slice(0,length)
    new_str = new_str.replaceAll(" ","%20")
    return new_str
}

// TEST CASES
console.log(urlify("Mr John Smith    ", 13)); // Mr%20John%20Smith
console.log(urlify("Bizzare world of Javascript     ", 27)) // Bizzare%20world%20of%20Javascript



console.log(" ")




