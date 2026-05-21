//programa 2
let idade = parseInt(prompt('insira a idade'));
let certificacao = prompt('possui certificação tecnica de segurança(sim/não)');
if(idade > 18 && certificacao == 'sim'){
    alert('acesso liberado');
   }
 else if(idade <= 18 && certificacao == 'sim'){
        alert('acesso negado, nescessita ter mais de 18 anos')
    }
else if(idade > 18 && certificacao == 'não'){
        alertt('acesso negado, nescessia ter a certificação');
    }
else{
    alert('acesso negado, nescessita ter mais de 18 anos e ter certifição de segurança');
}