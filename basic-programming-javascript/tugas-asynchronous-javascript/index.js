// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini

const execute = (time,i=0)=>{
    let book = books[i]
    readBooks(time,book,function(newtime){
        if (newtime !== time && i<books.length-1){
            i++
            execute(newtime,i)
        }
    })
}



execute(50000)


console.log(" ")

