function calcularGorjeta(evento){
    event.preventDefault()
    let bill = document.getElementById('bill').value;
    let servicoQual = document.getElementById('servicoQual').value
    let pessoas = document.getElementById('pessoas').value

    if(bill == '' | servicoQual == 0){
        alert("Por favor, preencha os campos")
        return;
    }

    if(pessoas== "" | pessoas<=1){
        pessoas=1
        document.getElementById('cada').style.display = "none";
    }else{
        document.getElementById('cada').style.display = "block";
    }

    let total = (bill * servicoQual)/ pessoas;
    total = total.toFixed(2) //deixar duas casas decimais para o resultado
    document.getElementById('gorjeta').innerHTML = total;
    document.getElementById('totalGorjeta').style.display = "block";

}

document.getElementById('totalGorjeta').style.display = "none";
document.getElementById('cada').style.display = "none";

document.getElementById('formulario').addEventListener('submit', calcularGorjeta)
