function calcularAcertos(gabarito, numeroDeAlunos, respostasDosAlunos) {
    
    if (gabarito.length !== 30) {
      console.log("O gabarito deve ter exatamente 30 questões.");
      return;
    }
  
    let acertosPorAluno = {};
  
    for (let aluno = 1; aluno <= numeroDeAlunos; aluno++) {
     
      if (respostasDosAlunos[aluno].length !== 30) {
        console.log(`O cartão de respostas do aluno ${aluno} deve ter exatamente 30 respostas.`);
        continue;
      }
  
      let acertos = 0;
  
      for (let i = 0; i < 30; i++) {
        if (respostasDosAlunos[aluno][i] === gabarito[i]) {
          acertos++;
        }
      }
  
      acertosPorAluno[`Aluno ${aluno}`] = acertos;
    }
  
    console.log("Número de Acertos por Aluno:", acertosPorAluno);
  }
  
  const gabarito = ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E'];
  const numeroDeAlunos = 3;
  const respostasDosAlunos = {
    'Aluno 1': ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E'],
    'Aluno 2': ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'D'],
    'Aluno 3': ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E']
  };
  
  calcularAcertos(gabarito, numeroDeAlunos, respostasDosAlunos);
  