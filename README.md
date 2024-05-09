Função maiorData1
Esta função recebe dois parâmetros do tipo Date (data1 e data2).
Ela compara as duas datas e retorna a data mais recente entre elas.
Se data2 for maior que data1, a função retorna data2, caso contrário, retorna data1.

Função calcularIntervalo
Esta função recebe duas datas (dataAntiga e dataRecente).
Verifica se dataAntiga é realmente mais antiga que dataRecente.
Calcula o intervalo de tempo entre as duas datas em dias, horas, minutos e segundos.
Retorna uma string formatada representando o intervalo de tempo entre as datas.

 formatarDataAtual
Esta função não recebe nenhum parâmetro.
Obtém a data atual e formata-a no seguinte padrão: "hora:minuto - dia/mês/ano".
Retorna uma string representando a data atual formatada.

Função calcular
Esta função é chamada quando o botão de calcular é clicado.
Obtém os valores dos campos de data do formulário.
Adiciona um dia a cada uma das datas usando a função adicionaDia().
Calcula a data mais nova entre as duas usando a função maiorData().
Calcula o intervalo entre as datas usando a função calcularIntervalo().
Formata a data atual usando a função formatarDataAtual().
Exibe os resultados na página HTML.

Função maiorData
Esta é uma versão diferente da função maiorData1, que foi definida anteriormente. Ambas realizam a mesma função.
Recebe duas datas (date1 e date2) e retorna a data mais recente entre elas.

Função adicionaDia
Recebe uma data (date).
Adiciona um dia à data fornecida e retorna a nova data resultante.
