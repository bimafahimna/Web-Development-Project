class NilaiMahasiswa{
    constructor(id,nama){
      this.id = id
      this.nama= nama
      this.MataKuliah= ""
      this.nilai= 0
      this.IndeksNilai= null
      this.created_at = null
      this.updated_at = null
    }
  }

  module.exports={
    NilaiMahasiswa
  }

