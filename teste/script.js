fetch('https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        const saldo = document.getElementById('saldo');
        saldo = data.snapshotByPortfolio.equity
        const valor = document.getElementById('valor');
        valor = data.snapshotByPortfolio.valueApplied
        const rentabilidade = document.getElementById('rentabilidade');
        rentabilidade = data.snapshotByPortfolio.percentageProfit
        const valores = document.getElementById('valores');
        valores = data.snapshotByPortfolio
        const resultado = document.getElementById('equityProfit')
        resultado = data.snapshotByPortfolio.equityProfit

    })
    .catch((erro) => {
        console.log(erro)
    });

function filtro() {
    var input = getElementById("filtro");
    var lista = data.snapshotByPortfolio;
    var filtro = lista.filter;
    var serch;
    var i;
    variacao = input.value.toUpperCase();



    for (i = 0; i < lista.length; i++) {
        serch = filtro [0];
        if (input == filtro) {
            lista = lista[i].style.display;
        }else{
            console.log("não encontrado")
        }

    }
}

function organizar(){
    var dado = data;
    dado.sort(function(a,b) { 
        return a.getElementById("") - b.birthday.getElementById("") 
    });
    console.log(arr);
}