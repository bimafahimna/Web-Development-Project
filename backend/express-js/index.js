const express = require('express')
const app = express()
const port = 3000

const helloworld = (req, res) => {
  let result = req.query.text
  res.send(`Halo ${result}`)
}

const lingkarantabung = (req, res) => {
  let radius = req.query.radius
  let tinggi = req.query.tinggi
  const lingkarandantabung = ()=>{
    let luas = radius**2*3.14
    let keliling = 2*3.14*radius
    let volumetabung = luas*tinggi
    return [luas,keliling,volumetabung]
  }

  res.send(` jariJari : ${radius}, tinggi: ${tinggi}, volume tabung : ${lingkarandantabung()[2]}, luas alas tabung : ${lingkarandantabung()[0]},
   keliling alas tabung : ${lingkarandantabung()[1]}`)
}

const dataorang = (req,res)=>{
  let dataOrang =[
    {id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L"},
    {id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L"},
    {id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P"},
    {id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L"},
    {id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P"}
   ]
  let umur = req.query.umur
  let gender = req.query.gender
  
  if (umur !== undefined){
    if (gender === 'L'){
      var hasilfilter = dataOrang.filter(function(item){
        return item.umur >= umur && item.jenisKelamin === 'L'
      })
    }else if(gender === 'P'){
      var hasilfilter = dataOrang.filter(function(item){
        return item.umur >= umur && item.jenisKelamin === 'P'
      })
    }else{
      var hasilfilter = 'Gender tidak ada di data'
      res.send(hasilfilter)
    }
  }else{
    var hasilfilter = 'Tidak ada umur yang dimasukkan'
    res.send(hasilfilter)
  }
    
  if (hasilfilter.length === 0){
    hasilfilter = "Tidak ada data orang yang dicari"
    res.send(hasilfilter)
  }else{
    hasilfilter.forEach(function(item,index){
      res.write(`${index+1}. ${item.name} - Pekerjaan: ${item.pekerjaan} - Umur: ${item.umur} Tahun\n`)
    })
    res.end()
  }
}

const dataorangID = (req,res)=>{
  let dataOrang =[
    {id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L"},
    {id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L"},
    {id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P"},
    {id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L"},
    {id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P"}
  ]
  let id = req.params.id

  var idfilter = dataOrang.filter(function(item){
    return item.id == id
  })
  let data = idfilter[0]
  if (idfilter.length === 0 ){
    res.send(`Maaf data tidak ditemukan`)
  }else if(data.jenisKelamin == 'L'){
    res.send(`Pak ${data.name} adalah seorang ${data.pekerjaan} yang berusia ${data.umur} tahun`)
  }else{
    res.send(`Bu ${data.name} adalah seorang ${data.pekerjaan} yang berusia ${data.umur} tahun`)
  }
}


app.get('/halo', helloworld)

app.get('/lingkaran-tabung', lingkarantabung)

app.get('/data-orang',dataorang)

app.get('/data-orang/:id',dataorangID)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

