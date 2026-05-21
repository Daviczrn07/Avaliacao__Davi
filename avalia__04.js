//programa 1
let insumo = prompt("qual o insumo industrial");
let estoque = parseInt(prompt('digite a quantidde em estoque'));
let quantidadeMinima = 50;
if(estoque < quantidadeMinima){
    let compra = quantidadeMinima - estoque;
alert(`PRODUTO ABAIXO DO ESTOQUE MINIMO\n ${insumo}\n quantidade a ser comprada: ${compra}`);
}
else{
    alert('produto não está em falta');
}
