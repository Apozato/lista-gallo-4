function analisarTemperaturas() {
    
    let temperaturas = [];
    let horarios = [];
  
    for (let i = 0; i < 24; i++) {
      let temperatura = parseFloat(prompt(`Informe a temperatura em Celsius para o horário ${i + 1}:`));
  
      temperaturas.push(temperatura);
  
      horarios.push(i + 1);
    }
  
    // Encontra a maior e menor temperatura e seus horários
    let maiorTemperatura = Math.max(...temperaturas);
    let menorTemperatura = Math.min(...temperaturas);
    let horarioMaiorTemperatura = horarios[temperaturas.indexOf(maiorTemperatura)] + "h";
    let horarioMenorTemperatura = horarios[temperaturas.indexOf(menorTemperatura)] + "h";
  
    // Calcula a média das temperaturas
    let somaTemperaturas = temperaturas.reduce((acc, temperatura) => acc + temperatura, 0);
    let mediaTemperaturas = somaTemperaturas / temperaturas.length;
  
    // Exibe os resultados
    console.log("Maior Temperatura:", maiorTemperatura + "°C às " + horarioMaiorTemperatura);
    console.log("Menor Temperatura:", menorTemperatura + "°C às " + horarioMenorTemperatura);
    console.log("Média das Temperaturas:", mediaTemperaturas.toFixed(2) + "°C");
  }
 
  analisarTemperaturas();
  