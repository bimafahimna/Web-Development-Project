const express =  require('express')
const authentication = require('../models/Authentication')
const { getNilaiMahasiswa,getNilaiMahasiswaById,createNilaiMahasiswa,updateNilaiMahasiswa,deleteNilaiMahasiswa} = require('../controllers/NilaiMahasiswaController')

const router = express.Router()

router.get('/api/data-nilai-mahasiswa', getNilaiMahasiswa)
router.get('/api/data-nilai-mahasiswa/:id', getNilaiMahasiswaById)
router.post('/api/data-nilai-mahasiswa',authentication,createNilaiMahasiswa)
router.put('/api/data-nilai-mahasiswa/:id',authentication, updateNilaiMahasiswa)
router.delete('/api/data-nilai-mahasiswa/:id',authentication, deleteNilaiMahasiswa)


module.exports= router
