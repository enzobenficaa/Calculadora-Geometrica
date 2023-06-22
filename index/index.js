// Aqui tinhamos como intenção separar tudo em funções para deixar o codigo mais agradavel
// Criamos a função area do triangulo
function areaTriangulo() {
  // Pedimos a interação do usuario para ele digitar o valor da base do triangulo
  let base = prompt("Digite o valor da base");
  // Tambem pedimos para o usuario digitar o valor da altura do triangulo
  let altura = prompt("Digite o valor da altura");
  // Aqui vamos retornar os valores apurados dentro da formula da area do triangulo
  return (base * altura) / 2;
}
// Criamos a função da area do retangulo
function areaRetangulo() {
  // Usuario nos passaria o valor da base do retangulo
  let base = prompt("Digite o valor da base");
  // Usuario tambem passaria o valor da altura do retangulo
  let altura = prompt("Digite o valor da altura");
  // Iriamos retornar os resultados apurados dentro da formula do retangulo
  return base * altura;
}
// Criamos a função da area do quadrado
function areaQuadrado() {
  // Apenas precisamos que o usuario nos digo o valor do lado
  let lado = prompt("Digite o lado");
  // Retornando assim a formula sendo Lado X Lado, com o valor que foi digitado
  return lado * lado;
}
// Criamos a função da area do Trapezio
function areaTrapezio() {
  // Pedimos para o usuario digitar o valor da base maior do trapezio
  let baseMaior = parseFloat(prompt("Digite o valor da base maior"));
  // Pedimos para o usuario digitar o valor da base menor do trapezio
  let baseMenor = parseFloat(prompt("Digite o valor da base menor"));
  // Pedimos para o usuario digitar o valor da altura do trapezio
  let altura = prompt("Digite o valor da altura");
  // Aqui iriamos retornar os valores que foram digitados dentro da formula da area do trapezio
  return ((baseMaior + baseMenor) * altura) / 2;
}
// Aqui criamos a formula da area do circulo
function areaCirculo() {
  // Pedimos ao usuario o valor do raio
  let raio = prompt("Digite o valor do raio");
  // Retornamos o valor do raio com um valor aproximado de "3.14" de PI
  return 3.14 * raio * raio;
}
// Criamos o nosso menu tambem dentro de uma função para termos uma mmanipulação melhor
function menu() {
  // Aqui vamos retornar dentro de um prompt todas as opções que o usuario possui dentro de nossa aplicação
  return prompt(
    "Seja bem vindo(a) a calculadora geométrica \n" +
      "Escolha uma das opções abaixo \n" +
      "\n1. Cálculo da área do triângulo" +
      "\n2. Cálculo da área do retângulo" +
      "\n3. Cálculo da área do quadrado" +
      "\n4. Cálculo da área do trapézio" +
      "\n5. Cálculo da área do círculo" +
      "\n6. Sair"
  );
}
// Aqui que o nosso codigo começa a ganhar vida
// Temos a função de executar, onde todos as nossas funções criadas antes irão interagir
function executar() {
  // Criamos a variavel opção para o usuario poder escolher qual funcionalidade ele deseja
  let opcao = "";

  do {
    // Aqui salvamos em uma variavel "opcao" o que o usuario escolheu em nosso menu
    opcao = menu();
    // Aqui criamos uma variavel "resultado" para usarmos depois dentro de um if
    let resultado;

    switch (opcao) {
      // Dentro do switch temos as opções que antes criavamos todos os codigos nos casos, agora apenas chamamos as funções que ja foram feitas
      case "1":
        // Nesse caso, apenas chamamos a função da area do triangulo
        resultado = areaTriangulo();
        break;
      case "2":
        // Nesse caso, apenas chamamos a função da area do retangulo
        resultado = areaRetangulo();
        break;
      case "3":
        // Nesse caso, apenas chamamos a função da area do quadrado
        resultado = areaQuadrado();
        break;
      case "4":
        // Nesse caso, apenas chamamos a função da area do trapezio
        resultado = areaTrapezio();
        break;
      case "5":
        // Nesse caso, apenas chamamos a função da area do circulo
        resultado = areaCirculo();
        break;
      case "6":
        // Aqui temos a opção de sair, logo, temos um alert avisando que estamos saindo do codigo
        alert("Saindo...");
        break;
      default:
        // Uma opção default, somente para cuidar caso o usuario digite algo diferente do esperado nos casos anteriores
        alert("Opção inválida!");
        break;
    }
    // Aqui temos o resultado das funções aparecendo nessa parte
    // Sempre bom saber que nos "cases", nós chamamos as funções
    // Aqui temos uma condição que apresenta o resultado, se ele for verdadeiro
    if (resultado) {
      alert("Resultado: " + resultado);
    }
    // Esse menu ficará sempre rodando enquanto o usuario não optar por digitar a opção de sair
  } while (opcao !== "6");
}
// Aqui nós chamamos a nossa função executar para ela começar a rodar a nossa aplicação
executar();
