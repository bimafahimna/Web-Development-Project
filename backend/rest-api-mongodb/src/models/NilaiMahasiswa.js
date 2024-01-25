const mongoose = require("mongoose")
const SkemaNilaiMahasiswa = new mongoose.Schema({
  nama: String,
  mata_kuliah: String,
  nilai: Number,
  indeks_nilai: {type: String, require: true},
  created_at: {type: Date, default: Date.now},
  update_at: Date
})

const NilaiMahasiswa = mongoose.model('Nilai_Mahasiswa', SkemaNilaiMahasiswa)

module.exports = {
  NilaiMahasiswa
}



