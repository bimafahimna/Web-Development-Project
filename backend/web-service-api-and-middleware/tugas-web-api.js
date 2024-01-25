const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

class NilaiMahasiswa{
  constructor(id,nama,mataKuliah,nilai,indeksNilai){
    this.id = id
    this.nama= nama
    this.mataKuliah= mataKuliah
    this.nilai= nilai
    this.indeksNilai= indeksNilai
  }
}

let semuaNilaiMahasiswa = []

const nilaitoindex=(nilai)=>{
  let indeksNilai = ""
  if(nilai >= 80){
    indeksNilai = "A"
  }else if(nilai >= 70){
    indeksNilai = "B"
  }else if(nilai >= 60){
    indeksNilai = "C"
  }else if(nilai >= 50){
    indeksNilai = "D"
  }else{
    indeksNilai = "E"
  }
  return indeksNilai
}
  

function authentication(req, res, next) {
  var authheader = req.headers.authorization;

  if (!authheader) {
    var err = "You are not authenticated!"
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 401;
    return next(err)
  }

  var auth = new Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
  var user = auth[0];
  var pass = auth[1];

  if (user == 'admin' && pass == 'password') {
    // If Authorized user
    next();
  } else {
    var err = "You are not authenticated!"
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 401;
    return next(err);
  }
}

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

/* getNilaiMahasiswa filter
const filterRecursive = (json,minNilai=undefined,maxNilai=undefined,sortByNilai=undefined
  ,minIndeksNilai=undefined,id=undefined,i=1)=>{
  switch(i) {
    case 1:   { 
      if(minNilai !== undefined){
        filternilai = json.filter(function(item){
          return item.nilai >= minNilai
        })
        i++
        filterRecursive(json,minNilai,maxNilai,sortByNilai,minIndeksNilai,id,i)
      }else{
        filternilai = json
        i++
        filterRecursive(json,minNilai,maxNilai,sortByNilai,minIndeksNilai,id,i)
      };
      break;
    }
    case 2: {
      if(maxNilai !== undefined){
        filternilai = json.filter(function(item){
          return item.nilai <= maxNilai
        })
        i++
      }else{
        filternilai = json
        i++
      };
      break;
    }
    case 3:{
      if(sortByNilai !== undefined){
        var filternilai = json.filter(function(item){
          return item.nilai <= maxNilai
        })
      }else if (sortByNilai === 'asc'){
        console.log('test log')
      }else{
        filternilai = json
        i++
      };
      break;
    }
    default:  { 
      console.log('Tidak terjadi apa-apa')
      filternilai = json; }}
  return filternilai
}



const filterNilai = (json,minNilai)=>{
  console.log(json)
  minimum = json.filter(function(item){
    return item.nilai >= minNilai
  }) 
}


const getNilaiMahasiswa = (req,res)=>{
  let {minNilai,maxNilai,sortByNilai,minIndeksNilai,id} = req.query
  
  if(minNilai>maxNilai){
    res.status(400).send("batas minimum tidak dapat lebih dari batas maksimum!")
  }else{
    let hasil = filterNilai(semuaNilaiMahasiswa,minNilai)
    console.log(hasil)
    res.status(200).json(hasil) 
  }
}
*/



const getNilaiMahasiswa = (req,res)=>{
  console.log(semuaNilaiMahasiswa)
  res.status(200).json(semuaNilaiMahasiswa)
}

app.post('/data-nilai-mahasiswa', authentication, inputdata)
app.get('/data-nilai-mahasiswa',authentication, getNilaiMahasiswa)
app.get('/data-nilai-mahasiswa/:id',authentication,getNilaiMahasiswaByID)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


