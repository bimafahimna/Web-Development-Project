const { NilaiMahasiswa } = require ('../models/NilaiMahasiswa')
const { nilaitoindex } = require ('../models/NilaiToIndex')


/*
const getNilaiMahasiswa = async (req, res) => {
  try{
    let NM = await NilaiMahasiswa.find({})
    res.json(NM)
  }catch(err){
    res.status(500).json({err})
  }
}
*/

const getNilaiMahasiswa = async (req, res) => {
  let {minNilai,maxNilai,sortByNilai,minIndeksNilai} = req.query
  let query = {nilai:{}}
  let sortby = {}
  try{
    if(minNilai !== undefined){
      Object.assign(query["nilai"],{$gte:minNilai})
    }
    if(maxNilai !== undefined){
      Object.assign(query["nilai"],{$lte:maxNilai})
    }
    if(minNilai === undefined && maxNilai === undefined){
      delete query['nilai']
    }
    if(sortByNilai === 'asc' || sortByNilai === 'desc'){
      Object.assign(sortby,{nilai:sortByNilai})

    }else if(sortByNilai === undefined){

    }else{
      throw "Masukkan asc atau desc untuk sortByNilai"
    }
    if(minIndeksNilai !== undefined){
      query["indeks_nilai"] = {$lte:minIndeksNilai}
    }

    let NM = await NilaiMahasiswa.find(query).sort(sortby)
    res.json(NM)
  }catch(err){
    res.status(500).json({err})
  }
}

const getNilaiMahasiswaById = async (req, res) => {
  let {id} = req.params
  try{
    let NM = await NilaiMahasiswa.findById(id)
    if (NM){
      res.json(NM)
    }else{
      res.status(404).json({info: "data not found"})
    }
  }catch(err){
    res.status(404).json({info: "data not found"})
  }
}

const createNilaiMahasiswa = async (req, res) => {
  let {nama, mata_kuliah,nilai}= req.body
  let indeks_nilai = nilaitoindex(nilai)

  if (nama !== undefined && mata_kuliah !== undefined && nilai !== undefined && indeks_nilai !== undefined){
   try {
    let NM = await NilaiMahasiswa.create({nama, mata_kuliah,nilai,indeks_nilai,update_at: Date.now()})
    res.json({NM, info: "Nilai Mahasiswa berhasil di input"})
   }catch(err){
    res.status(500).json({err})
   }
  }else{
    res.status(400).json({
      error: "Masukkan nama, mata_kuliah, dan nilai"
    })
  }
}

const updateNilaiMahasiswa = async (req, res) => {
  let {id} = req.params
  let {nama, mata_kuliah,nilai} = req.body
  let indeks_nilai = nilaitoindex(nilai)

  if (nama !== undefined && mata_kuliah !== undefined && nilai!== undefined){
    try{
      let NM = await NilaiMahasiswa.findById(id)
      NM.nama = nama
      NM.mata_kuliah = mata_kuliah
      NM.nilai = nilai
      NM.indeks_nilai = indeks_nilai
      NM.update_at = Date.now()
      
      await NM.save()
      res.json({NM, info: "Nilai Mahasiswa Berhasil diperbarui"})
    }catch(err){
      if(err.errors){
        res.status(500).json(err.errors)
    }else{
        res.status(404).json({info: "data not found"})
      }
    }
  }else{
    res.status(400).json({
      error: "Masukkan nama, mata_kuliah, dan nilai"
    })
  }
}

const deleteNilaiMahasiswa = async (req, res) => {
  let {id} = req.params
  try{
    let NM = await NilaiMahasiswa.findById(id)
    await NM.deleteOne()
    res.json({info: "Nilai Mahasiswa berhasil dihapus"})
  }catch(err){
    res.status(404).json({info: "data not found"})
  }
}


module.exports = {
  getNilaiMahasiswa,
  getNilaiMahasiswaById,
  createNilaiMahasiswa,
  updateNilaiMahasiswa,
  deleteNilaiMahasiswa
}
