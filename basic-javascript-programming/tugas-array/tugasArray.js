// Soal 1

console.log('Soal 1')
console.log('------------------------------------')

var peserta = [ "3. John ", "8. Frank ", "7. Jack", "6. Harry", "5. Danny", "4. David", "9. Sarah", "2. Ellie", "1. Amber" ];

peserta.sort()

console.log(peserta)

console.log(" ")

// Soal 2

console.log('Soal 2')
console.log('------------------------------------')

var dataPeserta = ["john", "laki-laki", "programmer", "30"]

var output = "Halo, nama saya "+dataPeserta.slice(0,1)+". saya "+dataPeserta.slice(1,2)+" berumur "+dataPeserta.slice(3)+" bekerja sebagai seorang "+dataPeserta.slice(2,3);

console.log(output)

// Output: "Halo, nama saya john. saya laki-laki berumur 30 bekerja sebagai seorang programmer"

console.log(" ")

// Soal 3

console.log('Soal 3')
console.log('------------------------------------')

var kalimat= ["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"]

kalimat.splice(0,3,"saya")

kalimat=kalimat.join(" ")

console.log(kalimat)

console.log(" ")


// Soal 4

console.log('Soal 4')
console.log('------------------------------------')

var sayuran=[]

sayuran.push("Kangkung",
    'Bayam',
    "Buncis",
    'Kubis',
    'Timun',
    'Seledri',
    'Tauge'
)

sayuran.sort()

for (i=1;i<=sayuran.length;i++){
    console.log(i+"."+sayuran[i-1])
}


console.log(" ")

// Soal 5

console.log('Soal 5')
console.log('------------------------------------')


var word = "car"
var arr1 = []

arr1.push(word.substring(0,1))
arr1.push(word.substring(0,2))
arr1.push(word)
arr1.push(word.substring(1,2))
arr1.push(word.substring(1))
arr1.push(word.substring(2))

console.log(arr1)



console.log(" ")


// Soal 6

console.log('Soal 6')
console.log('------------------------------------')

var numbers = [4,5,1,4,6,8,9,21]
var sum=0


for (i=0;i<numbers.length;i++){
    sum+=numbers[i]
}

console.log(sum)

console.log(" ")


// Soal 7

console.log('Soal 7')
console.log('------------------------------------')

var kumpulanAngka = [
    [1,3,5,7,8,9],
    [4,5,6,2,3,1],
    [6,7,8,1,3,5],
]

// Output [33, 21, 30]


var arr=[]

for (j=0;j<kumpulanAngka.length;j++){
    var sum2=0
    for (i=0;i<kumpulanAngka[j].length;i++){
        sum2+=kumpulanAngka[j][i]
    }
    arr.push(sum2)
}

console.log(arr)


console.log(" ")







