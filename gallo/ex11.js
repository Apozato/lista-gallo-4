function Poltrona(fileira, numero, ocupada) {
    this.fileira = fileira;
    this.numero = numero;
    this.ocupada = ocupada;
  }
  
  function inicializarSala() {
    const sala = [];
  
    for (let fileira = 'A'; fileira <= 'D'; fileira++) {
      for (let numero = 1; numero <= 20; numero++) {
        sala.push(new Poltrona(fileira, numero, false));
      }
    }
  
    return sala;
  }
  
  function exibirStatusPoltronas(sala) {
    console.log("Status das Poltronas:");
  
    for (let poltrona of sala) {
      console.log(`Fileira ${poltrona.fileira}, Poltrona ${poltrona.numero}: ${poltrona.ocupada ? 'Ocupada' : 'Vazia'}`);
    }
  }
  
  function comprarIngresso(sala, fileira, numero) {
    const poltrona = sala.find(p => p.fileira === fileira && p.numero === numero);
  
    if (poltrona) {
      if (!poltrona.ocupada) {
        poltrona.ocupada = true;
        console.log(`Ingresso comprado com sucesso! Fileira ${fileira}, Poltrona ${numero}`);
      } else {
        console.log(`Desculpe, a poltrona na Fileira ${fileira}, Poltrona ${numero} já está ocupada.`);
      }
    } else {
      console.log("Poltrona inválida. Certifique-se de informar a fileira (A, B, C ou D) e o número da poltrona corretamente.");
    }
  }
  
  function contarPoltronas(sala) {
    let ocupadas = 0;
    let vazias = 0;
  
    for (let poltrona of sala) {
      if (poltrona.ocupada) {
        ocupadas++;
      } else {
        vazias++;
      }
    }
  
    console.log(`Total de Poltronas Ocupadas: ${ocupadas}`);
    console.log(`Total de Poltronas Vazias: ${vazias}`);
  }
  
  const salaDeCinema = inicializarSala();
  
  exibirStatusPoltronas(salaDeCinema);
  
  comprarIngresso(salaDeCinema, 'A', 5);
  comprarIngresso(salaDeCinema, 'B', 10);
  comprarIngresso(salaDeCinema, 'C', 15);
  
  exibirStatusPoltronas(salaDeCinema);
  
  contarPoltronas(salaDeCinema);
  