/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = "Campeonato Paranaense";
console.log(championship); //Campeonato Paranaense

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ["Foz do Iguaçu", "Cianorte", "Coritiba", "Cascavel", "Paraná Clube"];
console.log( 'Times que estão participando do campeonato:', teams );
/*
Times que estão participando do campeonato: [ 'Foz do Iguaçu',
  'Cianorte',
  'Coritiba',
  'Cascavel',
  'Paraná Clube' ]
*/

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(posicao) {
  if (posicao > teams.length) {
    return "Não temos a informação do time que está nessa posição.";
  }
  return "O time que está em " + posicao + "º lugar é o " + teams[posicao - 1] + ".";
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(3); //O time que está em 3º lugar é o Coritiba.
showTeamPosition(5); //O time que está em 5º lugar é o Paraná Clube.
showTeamPosition(1); //O time que está em 1º lugar é o Foz do Iguaçu.
showTeamPosition(4); //O time que está em 4º lugar é o Cascavel.
showTeamPosition(10); //Não temos a informação do time que está nessa posição.

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var count = 20;
while(count <= 30) {
  console.log(count);
  count++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertoToHex(cor) {
  var corHex;
  switch(cor) {
    case "red":
      corHex = "#FF0000";
      break;
    case "blue":
      corHex = "#0000FF";
      break;
    case "green":
      corHex = "#008000";
      break;
    case "orange":
      corHex = "#FFA500";
      break;
    case "yellow":
      corHex = "#FFFF00";
      break;
    default:
      return "Não temos o equivalente hexadecimal para " + cor;
  }
  return "O hexadecimal para a cor " + cor + " é " + corHex + ".";
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertoToHex("blue"); //O hexadecimal para a cor blue é #0000FF.
convertoToHex("white"); //Não temos o equivalente hexadecimal para white
convertoToHex("red"); //O hexadecimal para a cor red é #FF0000.
convertoToHex("green"); //O hexadecimal para a cor green é #008000.
convertoToHex("black"); //Não temos o equivalente hexadecimal para black
convertoToHex("yellow"); //O hexadecimal para a cor yellow é #FFFF00.
convertoToHex("grey"); //Não temos o equivalente hexadecimal para grey
convertoToHex("orange"); //O hexadecimal para a cor orange é #FFA500.
