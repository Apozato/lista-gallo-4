function multiplicarPorIndice(vetor) {
   
    if (vetor.length !== 20) {
      console.log("O vetor deve ter exatamente 20 elementos.");
      return;
    }
  
    let resultados = [];
  
    for (let i = 0; i < vetor.length; i++) {
      resultados.push(vetor[i] * i);
    }
  
    console.log("Resultado da multiplicação por índice:", resultados);
  }
  
  const meuVetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  multiplicarPorIndice(meuVetor);
  