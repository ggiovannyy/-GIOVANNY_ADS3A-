  
        function maiorData1(data1, data2) {
            if (data2 > data1) {
                return data2;
            } else {
                return data1;
            }
        }

       
        function calcularIntervalo(dataAntiga, dataRecente) {
            
            if (dataAntiga > dataRecente) {
                return "Erro: A primeira data deve ser mais antiga que a segunda data.";
            }

          
            const diferencaMilissegundos = dataRecente.getTime() - dataAntiga.getTime();

            
            const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
            const dias = Math.floor(diferencaMilissegundos / umDiaEmMilissegundos);
            const horas = Math.floor((diferencaMilissegundos % umDiaEmMilissegundos) / (1000 * 60 * 60));
            const minutos = Math.floor((diferencaMilissegundos % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferencaMilissegundos % (1000 * 60)) / 1000);

            return `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
        }

        
        function formatarDataAtual() {
            const dataAtual = new Date();

            
            const hora = ('0' + dataAtual.getHours()).slice(-2); 
            const minuto = ('0' + dataAtual.getMinutes()).slice(-2); 
            const dia = ('0' + dataAtual.getDate()).slice(-2); 
            const mes = ('0' + (dataAtual.getMonth() + 1)).slice(-2); 
            const ano = dataAtual.getFullYear();

            
            const dataFormatada = hora + ':' + minuto + ' - ' + dia + '/' + mes + '/' + ano;

            return dataFormatada;
        }

        function calcular() {
            var data1 = new Date(document.getElementById('data1').value);
            var data2 = new Date(document.getElementById('data2').value);
            const resultadoElement = document.getElementById('resultado');
            data1=adicionaDia(data1);
            data2=adicionaDia(data2);
            const maior = maiorData(data1, data2);
            const intervalo = calcularIntervalo(data1, data2);
            const dataAtualFormatada = formatarDataAtual();

            resultadoElement.innerHTML = "Data mais nova: " + maior.toLocaleDateString() + "<br>Data atual: " + dataAtualFormatada + "<br>Intervalo entre as datas: " + intervalo;
        }

        function maiorData(date1, date2) {
            if (date1 > date2) {
                return date1;
            } else {
                return date2;
            }
        }

        function adicionaDia(date) {
            var diaSeguinte = new Date(date);
            diaSeguinte.setDate(diaSeguinte.getDate() + 1);
            return diaSeguinte;
        }
    