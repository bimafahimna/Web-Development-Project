// Soal 1

console.log('Soal 1')
console.log('------------------------------------')

console.log("LOOPING PERTAMA")
var i = 2

while (i <= 20){
    console.log(String(i)+" - I love coding")
    i+=2
}

console.log("LOOPING KEDUA")

j = 20

do {
    console.log(String(j)+" - I will become a MERN Stack developer")
    j-=2
} while(j>=2)

console.log(" ")

// Soal 2

console.log('Soal 2')
console.log('------------------------------------')

i=1

while (i<= 20){
    if(i%2 == 0){
        console.log(String(i)+" - Angka Genap")
    }else{
        console.log(String(i)+" - Angka Ganjil")
    }
        i++
}


console.log(" ")

// Soal 3

console.log('Soal 3')
console.log('------------------------------------')

for (var x=1; x<=20; x++) {
    if (x%2 != 0 && x%3 != 0) {
        console.log(x +  " - Santai");
    }else if (x%2 == 0 && x%3 != 0) {
        console.log(x + " - Berkualitas");   
    }else if (x%2 != 0 && x%3 == 0) {
        console.log(x + " - I Love Coding");
    }else if (x%2 == 0 && x%3 == 0) {
        console.log(x+" - Sanber Campus")
    }
}

console.log(" ")

// Soal 4

console.log('Soal 4')
console.log('------------------------------------')

var pagar = "#"
var pagar_baru4="#"
for (var i=1;i<=7;i++){
    console.log(pagar_baru4)
    pagar_baru4+=pagar
}
pagar_baru4=pagar_baru4.substring(0,7)

console.log(" ")

// Soal 5

console.log('Soal 5')
console.log('------------------------------------')

var whitespace = " "
var whitespace_baru5 = " "

for (var i=1;i<=7;i++){
    whitespace_baru5+=whitespace
}

for (var i=1;i<=7;i++){
    var space5 = whitespace_baru5.substring(0,7-i)
    var pagar5 = pagar_baru4.substring(7-i)

    
    piramid5= space5+pagar5
    console.log(piramid5)
}


console.log(" ")

// Soal 6

console.log('Soal 6')
console.log('------------------------------------')

var pagar_baru6="#"
for (var i=1;i<=5;i++){
    console.log(pagar_baru6)
    pagar_baru6+=pagar
}

for (var i=1;i<=4;i++){
    var space6 = whitespace_baru5.substring(5-i)
    var pagar6 = pagar_baru4.substring(0,5-i)

    
    piramid6= pagar6+space6
    console.log(piramid6)
}


console.log(" ")

// Soal 7

console.log('Soal 7')
console.log('------------------------------------')

var sentence = "Special Bootcamp 2023"
var new_sentence=""

for (i = 0;i<=sentence.length;i++){
    if (sentence.substring(i,i+1) === 'a'){
        new_sentence+='a'
    }else if(sentence.substring(i,i+1) === 'i'){
        new_sentence+='i'
    }else if (sentence.substring(i,i+1) === 'u'){
        new_sentence+='u'
    }else if (sentence.substring(i,i+1) === 'e'){
        new_sentence+='e'
    }else if (sentence.substring(i,i+1) === 'o'){
        new_sentence+='o'
    }else if (sentence.substring(i,i+1) === ' '){
        new_sentence+=" "
    }else if (sentence.substring(i,i+1) === '0'){
        new_sentence+="0"
    }else if (sentence.substring(i,i+1) === '2'){
        new_sentence+="2"
    }else if (sentence.substring(i,i+1) === '3'){
        new_sentence+="3"
    }
}

console.log(new_sentence)

console.log(" ")

// Soal 8

console.log('Soal 8')
console.log('------------------------------------')

var sentence = "Fullstack Developer"
var new_sentence = "Fullstack Developer"

for (i = 0;i<=sentence.length;i++){
    if (sentence.substring(i,i+1) === 'a'){
        new_sentence=new_sentence.replace('a','')
    }else if(sentence.substring(i,i+1) === 'i'){
        new_sentence=new_sentence.replace('i','')
    }else if (sentence.substring(i,i+1) === 'u'){
        new_sentence=new_sentence.replace('u','')
    }else if (sentence.substring(i,i+1) === 'e'){
        new_sentence=new_sentence.replace('e','')
    }else if (sentence.substring(i,i+1) === 'o'){
        new_sentence=new_sentence.replace('o','')
    }
}

console.log(new_sentence)

console.log(" ")

