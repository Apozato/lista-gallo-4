function inverterOrdemDoVetor(vetor) {
   
    if (vetor.length !== 20) {
      console.log("O vetor deve ter exatamente 20 elementos.");
      return;
    }
  
    vetor.reverse();
  
    console.log("Vetor Invertido:", vetor);
  }
  
  const meuVetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  inverterOrdemDoVetor(meuVetor);
  
