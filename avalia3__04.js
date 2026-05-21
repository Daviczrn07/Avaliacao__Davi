//programa 3
let salarioBruto = parseFloat(prompt('insira seu salario bruto'));
let tempoAnos = parseInt(prompt('quantos anos trabalha na empresa'));
let bonus
let salarioFinal
if(tempoAnos > 5){
    bonus = 0.1;
    salarioFinal = salarioBruto + (salarioBruto * bonus);
    console.log(`salario bruto: ${salarioBruto}\n bônus: ${bonus * salarioBruto}\n salario final: ${salarioFinal}`);
}
else if( tempoAnos <= 5){
    bonus = 0.05;
    salarioFinal = salarioBruto + (salarioBruto * bonus);
    console.log(`salario bruto: ${salarioBruto}\n bônus: ${bonus * salarioBruto}\n salario final: ${salarioFinal}`);
}
