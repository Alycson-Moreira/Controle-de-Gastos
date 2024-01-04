let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    function retornaMes() {
        let mes = new Date();
        let recebe_Mes = mes.getMonth() 

        for (let i = 0; i < meses.length; i++) {
            if (recebe_Mes == i) {
                
                let mesdoArray = document.getElementById("mesAtual");
                return  mesdoArray.innerHTML += meses[i];
            }
        }
    }   
retornaMes();    

