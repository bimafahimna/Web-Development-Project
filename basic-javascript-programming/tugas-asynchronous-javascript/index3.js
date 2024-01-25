var filterBooksPromise = require('./promise2.js')
 
// Lanjutkan code untuk menjalankan function filterBookPromise


async function execute(c,p){
    try{
        var result = await filterBooksPromise(c,p)
        console.log(result)
    }catch(err){
        console.log(err.message)
    }
}

execute(true,50)
execute(false,250)
execute(true,30)

console.log(" ")





