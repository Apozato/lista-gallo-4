function somarVetores(vetor1, vetor2) {
    
    if (vetor1.length !== vetor2.length) {
      console.log("Os vetores devem ter o mesmo tamanho para serem somados.");
      return;
    }
  
   
    let resultado = new Array(vetor1.length).fill(0);
  
    
    for (let i = 0; i < vetor1.length; i++) {
      resultado[i] = vetor1[i] + vetor2[i];
    }
  
    
    console.log("Vetor Resultado da Soma:", resultado);
  }
  
  const vetorA = [1, 2, 3, 4, 5];
  const vetorB = [6, 7, 8, 9, 10];
  
  somarVetores(vetorA, vetorB);
  