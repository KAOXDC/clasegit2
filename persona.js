class Persona{
    constructor (this, nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

}

p1 = new Persona('Luis', 15)
p2 = new Persona('Sandra', 25)
p3 = new Persona('Adry', 55)

console.log(p1.nombre, p1.edad)
console.log(p2.nombre, p2.edad)
console.log(p3.nombre, p3.edad)
