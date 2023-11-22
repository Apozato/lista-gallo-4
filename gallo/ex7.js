function separarParesEImpares(vetor) {
    
    if (vetor.length !== 10) {
      console.log("O vetor deve ter exatamente 10 elementos.");
      return;
    }
  
    let pares = [];
    let impares = [];
  
    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] % 2 === 0) {
        pares.push(vetor[i]);
      } else {
        impares.push(vetor[i]);
      }
    }
  
    console.log("Elementos Pares:", pares);
    console.log("Elementos Ímpares:", impares);
  }
  
  const meuVetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  separarParesEImpares(meuVetor);
  