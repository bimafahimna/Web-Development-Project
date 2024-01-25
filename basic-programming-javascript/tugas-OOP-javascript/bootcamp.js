var Kelas = require('./kelas.js')
var Student = require('./student.js')


class Bootcamp{
    constructor(bootcamp){
        this._name = bootcamp
        this._classes= []        
    }
    createClass(n,l,i){
       var kelas = new Kelas(n,l,i)
       this._classes.push(kelas) 
    }
    get classes(){
        return this._classes
    }
    register(kelas,newStud){
        kelas.addStudent(newStud)
    }
}


const sanber = new Bootcamp("sanbercode")

sanber.createClass("Laravel", "beginner", "abduh")

sanber.createClass("React", "beginner", "abdul")

console.log(sanber.classes)

let names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"]
names.map((nama, index) => {
  let newStud = new Student(nama)
  let kelas = sanber.classes[index % 2]
  sanber.register(kelas, newStud)
})
// menampilkan data kelas dan student nya
sanber.classes.forEach(kelas => {
  console.log(kelas)
});



