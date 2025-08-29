let comando = 'ajuda';
//switch = if
switch (comando) {
    case 'ola':
        console.log('Olá, como posso ajudar?');
        break;
    case 'ajuda':
        console.log('Aqui estão algumas opções de ajuda:');
        break; 
    case 'sair':
        console.log('Saindo do sistema...');
        break;
    default:
        console.log('Comando não reconhecido. Tente novamente.');
}

let contador = 0;
while (contador < 3) {
  console.log("Contador: " + contador);
  contador++;
}
/* Saída:
Contador: 0
Contador: 1
Contador: 2
*/

// Exemplo: Iterar sobre uma lista de respostas possíveis
const respostasPadrao = [
  "Não entendi.",
  "Poderia repetir?",
  "Não tenho essa informação."
];

for (let i = 0; i < respostasPadrao.length; i++) {
  console.log(`Resposta ${i + 1}: ${respostasPadrao[i]}`);
}
/* Saída:
Resposta 1: Não entendi.
Resposta 2: Poderia repetir?
Resposta 3: Não tenho essa informação.
*/
