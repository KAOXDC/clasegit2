class Persona:

    def __init__ (self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

p1 = Persona('Diego', 15)
p2 = Persona('Ana', 32)
p3 = Persona('Jose', 52)
p4 = Persona('Kelly', 25)

print(p1.nombre, p1.edad)
print(p2.nombre, p2.edad)
print(p3.nombre, p3.edad)
print(p4.nombre, p4.edad)
