function realizarOperacoes(vetor1, vetor2, operadores) {
    
    if (vetor1.length !== 20 || vetor2.length !== 20 || operadores.length !== 20) {
      console.log("Os vetores devem ter exatamente 20 elementos cada.");
      return;
    }
  
    let resultados = [];
  
    for (let i = 0; i < 20; i++) {
      let resultado;
  
      switch (operadores[i]) {
        case '+':
          resultado = vetor1[i] + vetor2[i];
          break;
        case '-':
          resultado = vetor1[i] - vetor2[i];
          break;
        case '*':
          resultado = vetor1[i] * vetor2[i];
          break;
        case '/':
          resultado = vetor1[i] / vetor2[i];
          break;
        default:
          console.log(`Operador inválido na posição ${i}.`);
          return;
      }
  
      resultados.push(resultado);
    }
  
    console.log("Resultados das Operações:", resultados);
  }
  
  
  const vetorA = [10, 5, 8, 15, 20, 3, 12, 9, 7, 18, 25, 14, 6, 17, 22, 11, 13, 4, 19, 16];
  const vetorB = [5, 3, 2, 10, 4, 7, 8, 6, 15, 12, 9, 11, 20, 14, 18, 25, 22, 13, 16, 7];
  const operadores = ['+', '-', '*', '/', '+', '-', '*', '/', '+', '-', '*', '/', '+', '-', '*', '/', '+', '-'];
  
  realizarOperacoes(vetorA, vetorB, operadores);
  