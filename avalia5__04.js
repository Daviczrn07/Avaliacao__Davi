let pecas = 0
let soma
for(i =1; i <=5; i++){
soma = parseInt(prompt('insira a quantidade de peças produzidas no dia'));
pecas = pecas + soma;
}
let mediaDiaria= pecas / 5;
alert(`peças produzidas na semana: ${pecas} \n media diaria ${mediaDiaria}\n `);