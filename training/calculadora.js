let x = 4
let y = 3
let op = '+'
function Calculadora(x,y,op){
    if (op==='+'){
        console.log (x+y)
    }
    else if (op==='-'){   
        console.log(x-y)
    }
}
Calculadora(1,2,op)
export {Calculadora}