class Persona{
    constructor (this, nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

}

p1 = new Persona('Luis', 15)
p2 = new Persona('Sandra', 25)

console.log(p1.nombre, p1.edad)
