const express = require('express')
const router = require("./src/routes/main")
const MongoClient = require("mongoose")


const app = express()
const port = 3000

MongoClient.connect('mongodb://0.0.0.0:27017/db_webserviceapi');


app.use(express.json())
app.use("/", router)

/*
  

const inputdata = (req,res)=>{
  let {nama,mataKuliah,nilai} = req.body
  let id = semuaNilaiMahasiswa.length+1

  if (nama === undefined && mataKuliah === undefined && nilai === undefined){
    res.status(400).send("Data tidak lengkap!")
  }else{
    if (nilai >100){
      res.status(400).send("Nilai tidak dapat lebih dari 100!")
    }else{
      let indeksNilai = nilaitoindex(nilai)
      let newData = new NilaiMahasiswa(id,nama,mataKuliah,nilai,indeksNilai)
      semuaNilaiMahasiswa = [...semuaNilaiMahasiswa,newData]
      res.status(200).json(newData)
    }     
  }
}

const getNilaiMahasiswaByID = (req,res)=>{
  let{id} = req.params
  let result = semuaNilaiMahasiswa.find(el => el.id == id)
  console.log(result)
  res.status(200).json(result)
}

*/

app.listen(port, () => {
  console.log(`REST API MongoDB app listening on port ${port}`)
})


