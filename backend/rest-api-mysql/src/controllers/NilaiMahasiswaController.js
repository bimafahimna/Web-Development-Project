const { connectionPool } = require("../config/database")
const { NilaiMahasiswa } = require ('../models/NilaiMahasiswa')
const { nilaitoindex } = require ('../models/NilaiToIndex')

const getNilaiMahasiswa = (req, res) => {
  connectionPool.query("SELECT * FROM nilai_mahasiswa",(err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    // rows fetch
    let hasil = data.map(el=>{
      let {id, name, MataKuliah, nilai, IndeksNilai, created_at, updated_at} = el 
      let nilaiMahasiswa = new NilaiMahasiswa(id, name)
      nilaiMahasiswa.MataKuliah = MataKuliah
      nilaiMahasiswa.nilai = nilai
      nilaiMahasiswa.IndeksNilai = IndeksNilai
      nilaiMahasiswa.created_at = created_at
      nilaiMahasiswa.updated_at = updated_at
      
      return nilaiMahasiswa
    })
    res.json(hasil)
  })
}

const getNilaiMahasiswaById = (req, res) => {
  let {id}= req.params
  connectionPool.query(`SELECT * FROM nilai_mahasiswa where id=${id}`,(err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    if (data.length === 0 ){
      res.status(404).json("Maaf data ditemukan")
    }

    let {id, name, MataKuliah,nilai,IndeksNilai, created_at, updated_at} = data[0]
    let nilaiMahasiswa = new NilaiMahasiswa(id, name)
    nilaiMahasiswa.MataKuliah = MataKuliah
    nilaiMahasiswa.nilai = nilai
    nilaiMahasiswa.IndeksNilai = IndeksNilai
    nilaiMahasiswa.created_at = created_at
    nilaiMahasiswa.updated_at = updated_at
    return res.json(nilaiMahasiswa)
  })
}

const createNilaiMahasiswa = (req,res) =>{
    let {name, MataKuliah,nilai}= req.body
    let IndeksNilai = nilaitoindex(nilai)
    connectionPool.query(`INSERT INTO nilai_mahasiswa (name, MataKuliah, nilai, IndeksNilai, created_at, updated_at) VALUES ('${name}', '${MataKuliah}','${nilai}','${IndeksNilai}', NOW(), NOW())`,(err, data) => {
        if(err) {
            console.error(err);
            return;
        }
    
    res.json("nilai mahasiswa was successfully created")
  })
}

const updateNilaiMahasiswa = (req, res) => {
  let {name, MataKuliah}= req.body
  let {id}= req.params
  let IndeksNilai = nilaitoindex(nilai)
  connectionPool.query(`UPDATE nilai_mahasiswa SET name='${name}', MataKuliah='${MataKuliah}',nilai='${nilai}',IndeksNilai='${IndeksNilai}', updated_at=NOW() WHERE id=${id}`,(err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    
    res.json("nilai mahasiswa was successfully updated")
  })
}

const deleteNilaiMahasiswa = (req, res) => {
  let {id}= req.params
  connectionPool.query(`DELETE FROM nilai_mahasiswa WHERE id=${id}`,(err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    connectionPool.query(`ALTER TABLE db_webserviceapi.nilai_mahasiswa AUTO_INCREMENT = 1`),(err, data) => {
      if(err) {
          console.error(err);
          return;
      }
    }

    res.json("nilai mahasiswa was successfully deleted")
  })
}


module.exports = {
    getNilaiMahasiswa,
    getNilaiMahasiswaById,
    createNilaiMahasiswa,
    updateNilaiMahasiswa,
    deleteNilaiMahasiswa
  }


