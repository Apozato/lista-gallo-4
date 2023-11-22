function analisarLancamentosDeDado(resultados) {
    
    if (resultados.length !== 50) {
      console.log("O vetor deve ter exatamente 50 elementos.");
      return;
    }
  
    let contagemFaces = {};
 
    for (let i = 0; i < resultados.length; i++) {
      let resultado = resultados[i];
  
      if (contagemFaces[resultado]) {
        contagemFaces[resultado]++;
      } else {
        contagemFaces[resultado] = 1;
      }
    }
  
    let porcentagens = {};
    for (let face in contagemFaces) {
      porcentagens[face] = (contagemFaces[face] / 50) * 100;
    }
  
    console.log("Número de Ocorrências de Cada Face:", contagemFaces);
    console.log("Porcentagem de Ocorrência de Cada Face:", porcentagens);
  }
  
  const resultadosDoDado = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4];
  analisarLancamentosDeDado(resultadosDoDado);
  