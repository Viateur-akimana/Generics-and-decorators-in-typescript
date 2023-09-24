// class KeyValuePair{
//     constructor(public name:string, public id: number){}
// }
// const pair = new KeyValuePair("VIATEUR",9);
// console.log(pair)


//generic functions in TS
// 
// 
// function people(value: string){
// return value;
// }
// const person = people("viateur");
// console.log(person)

          //module exports and imports
// import {Circle, Square} from "./shapes";
// const area = new Circle(1);
// const perimeter = new Square(9)
// console.log(area.radius)
// console.log(perimeter.side)
     //wildacard opetatopr
//   import * as shapes from "./shapes"
//   const area = new shapes.Circle(1);
//   const perimeter = new shapes.Square(4);
//   console.log(area);
//   console.log(perimeter)

           //integration btn js andts

 import { calculateTax } from "./tax";
 let tax = calculateTax(100);
 console.log(tax)          
