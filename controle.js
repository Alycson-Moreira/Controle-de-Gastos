let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

//Localizar o mes atual e retornar no html associando ao mes correspondente do array.
    function retornaMes() {
        let mes = new Date();
        let recebe_Mes = mes.getMonth(); 

        for (let i = 0; i < meses.length; i++) {
            if (recebe_Mes == i) {
                
                let mesdoArray = document.getElementById("mesAtual");
                mesdoArray.innerHTML += meses[i];
            }
        }
    }

//Gerar vencimentos automaticamente no Select atravez do uso do for
    function geraVencimentos() {
        let select = document.querySelector("#vencimentos");

        for (let i = 1; i <= 31; i++) {
            select.options[select.options.length] = new Option(i);
        }
        

    }        
geraVencimentos();
retornaMes();

