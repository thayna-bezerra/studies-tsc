interface Human {
  name: string
  age?: number
  [prop: string]: any //sem nome e nem o tipo específico deste atributo (propriedade dinamica)
  greet(surname: string): void
}

function greetWithHello(people: Human){
  console.log('Hello, ' + people.name)
}

function changeName(people: Human) {
  people.name = 'Joana'
}

const people = {
  name: 'Maria',
  age: 23,
  greet(surname: string) {
    console.log("Hello, my name is " + this.name + ' ' + surname)
  }
}

greetWithHello(people)
changeName(people)
/*greetWithHello({ name: 'Jonas', age: 39, height: 1.75 })*/
people.greet('Ghrool')

//Usando Classes...
class Client implements Human {
  name: string = ''
  lastSale: Date = new Date
  greet(surname: string) {
    console.log("Hello, my name is " + this.name + " " + surname)
  }
}

const myClient = new Client()
myClient.name = 'Han'
greetWithHello(myClient)
myClient.greet('Solo')
console.log(myClient.lastSale)

//Interface Função
interface FunctionCalculation {
  (a: number, b: number): number
}

let potentiation: FunctionCalculation

potentiation = function(base: number, exp: number): number {
  return Array(exp).fill(base).reduce((t, a) => t * a)
}

console.log(potentiation( 3, 10))