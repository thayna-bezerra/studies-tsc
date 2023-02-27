let username: string = 'Thayna'
console.log(username)

let age: number = 17.0
console.log(age)

let havehobbies: boolean = false

//tipos explícitos
let myAge: number
myAge = 17
console.log(typeof myAge)

//array
let hobbies: any[] = ["music", "bodybuilding"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100]

// tuplas
let address: [string, number] = ["Av Rodoviaria", 163]
console.log(address)

//enums
enum Color {
  Gray, //0
  Green, //1
  Blue //2
}

let myColor: Color = Color.Blue
console.log(myColor)
console.log(Color.Gray)

//any
let car: any = 'BMW'
car = {
  marca: 'BMW',
  ano: 2010
}
console.log(car)