var filterCarsPromise = require('./promise3.js')
 
// Lanjutkan code untuk menjalankan function filterCars

async function execute(color,year){
    try{
        var result = await filterCarsPromise(color,year)
        console.log(result)
    }catch(err){
        console.log(err.message)
    }
}

execute('black',2019)
execute('silver',2017)
execute('grey',2019)
execute('grey',2018)
execute('black',2020)

