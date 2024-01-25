var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 

const execute = (time,i=0)=>{
    let book = books[i]
    readBooksPromise(time,book).then(function(newtime){
        i++;
        if (i<=books.length-1){
            execute(newtime,i)
        }
    }).catch(function(timesout){
        console.log("Sisa waktu "+timesout)
    })
}

execute(10000)


console.log(" ")

