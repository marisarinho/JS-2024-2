import { Calculadora } from "./calculadora";

let l1 = 2
let l2 = 2
let l3 = 2
function trianguloVerificacao(l1,l2,l3){
    if (l1 > 0 && l2 > 0 && l3 > 0){
         if (l1 === l2 && l2 === l3) {
             console.log("equilatero");
         } else if (l1 === l2 || l2 === l3 || l1 === l3) {
             console.log("isosceles");
         } else {
             console.log("escaleno");
         }
    }   
    else{
        console.log('invalido')
    }  
}
trianguloVerificacao(2,1,2)

Calculadora(x,y,op)