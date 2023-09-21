//Generics in ts
class KeyValues<T, V>{
constructor( public key:T, public value: V){}
}
const keyValues = new KeyValues<number,string>(4,"here")
console.log(keyValues.value)