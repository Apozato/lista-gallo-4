function calcularMediaAritmetica(vetor) {
    
    if (vetor.length !== 10) {
      console.log("O vetor deve ter exatamente 10 elementos.");
      return;
    }
  
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
      soma += vetor[i];
    }
  
    let media = soma / vetor.length;
  
    console.log("Média Aritmética:", media.toFixed(2));
  }
  
  const meuVetor = [10.5, 7.2, 5.0, 8.8, 9.3, 6.7, 8.0, 7.5, 6.1, 9.8];
  calcularMediaAritmetica(meuVetor);
  