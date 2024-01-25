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

module.exports = {nilaitoindex}


