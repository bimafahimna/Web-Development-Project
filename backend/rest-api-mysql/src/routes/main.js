const express =  require('express')

const authentication = require('../models/Authentication')
const { getNilaiMahasiswaById,getNilaiMahasiswa,createNilaiMahasiswa,updateNilaiMahasiswa,deleteNilaiMahasiswa } = require('../controllers/NilaiMahasiswaController')

const router = express.Router()

router.get('/api/data-nilai-mahasiswa', getNilaiMahasiswa)
router.get('/api/data-nilai-/:id', getNilaiMahasiswaById)
router.post('/api/data-nilai-mahasiswa',authentication,createNilaiMahasiswa)
router.put('/api/data-nilai-mahasiswa/:id', updateNilaiMahasiswa)
router.delete('/api/data-nilai-mahasiswa/:id', deleteNilaiMahasiswa)



module.exports= router
