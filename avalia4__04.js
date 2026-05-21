//programa 4
let temperatura = 0;
while(temperatura < 180){
    temperatura = parseInt(prompt('digite a temperatura atual do forno'));
    if(temperatura < 180){
        alert('temperatura muito baixa');
    }
}
alert('Temperatura estavel de operação atingida. Iniciar processo quimico');