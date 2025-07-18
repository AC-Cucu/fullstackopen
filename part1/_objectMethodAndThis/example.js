const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
  doAddition: function(a, b) {
    console.log(a + b)
  }
}

arto.greet()  // se imprime "hello, my name is Arto Hellas"

arto.growOlder = function() {
  this.age += 1
}

console.log(arto.age)   // se imprime 35
arto.growOlder()
console.log(arto.age)   // se imprime 36

arto.doAddition(2, 3)  // se imprime 5

const referenceToAddition = arto.doAddition
referenceToAddition(20, 35) // se imprime 55

arto.greet()

const referenceToGreet = arto.greet


referenceToGreet() // se imprime "hello, my name is undefined"

// Al llamar al método a través de una referencia, el método pierde el conocimiento de cuál era el this original. 
// A diferencia de otros lenguajes, en JavaScript el valor de this se define en función de cómo el método se llama. 


//Existen varios mecanismos mediante los cuales se puede conservar el this original. 
// Uno de ellos es usar un método llamado bind

const referenceToGreetWithBind = arto.greet.bind(arto)
referenceToGreetWithBind() // se imprime "hello, my name is Arto Hellas"