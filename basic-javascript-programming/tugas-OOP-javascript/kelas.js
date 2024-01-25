class Kelas {
    constructor(name,level,instructor){
        this._name = name
        this._students = []
        this._level = level
        this._instructor = instructor
    }
    addStudent(newstud){
        this._students.push(newstud)
    }
    get name(){
        return this._name
    }
}

var kelaz = new Kelas("biji","Susah","kuda")

console.log(kelaz)

console.log(kelaz.name)

module.exports = Kelas

