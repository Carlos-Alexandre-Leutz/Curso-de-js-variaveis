//Vamos ter um capitulo sobre operadores mais vou falar sobre a diferença entre + e concatenar


// 2 numeros soma
console.log(2 + 2);
// 1 string concatena
console.log(2 + '2');
console.log('ola' + '2');


//Intendendo string 
var string = "";

string = 'Uma Frase';
console.log(string);
console.log(typeof(string));

var bemvindo = 'Bem Vindo'

var tamplate = `${bemvindo} ao curso de javascript 
aula ${ 1+2 }`;

console.log(tamplate);



var numero = 2;
console.log(numero);
console.log(typeof(numero));


var naoNumero = '2';
console.log(naoNumero);
console.log(typeof(naoNumero));



//numeros
var number = 2.23;
console.log(number);
console.log(typeof(number));

var int = 12;
var float = 1.5;
console.log(int);
console.log(float);



//NaN operação matematica 
console.log(2 * "ola") //NaN
console.log('Ola' - 2);


var int = 12;
var float = 1.5;
console.log(int);
console.log(float);

console.log(int * float);
console.log(int * parseInt(float));







var numeroComMuiasCasasDecimais = 123.345345345345345;
console.log(numeroComMuiasCasasDecimais);
var apenasDuasCasas = numeroComMuiasCasasDecimais.toFixed(4);
console.log(apenasDuasCasas);




var conta = (123 * 1.23) + (312 * 3.26);
var arredondado = parseFloat(conta.toFixed(2));

console.log(conta);
console.log(arredondado);



//bizarrices
var concat = 2 + '2' - 1;
console.log(concat);





/*









//Number










//A propriedade global Infinity é um valor numérico que representa infinito.
console.log(typeof(Infinity))

//O valor Infinity (positivo) é maior do que qualquer outro número.
//um infinito pode ser maior que outro 



var int = 12;
var float = 1.5;
console.log(int);
console.log(float);

console.log(int * float);
console.log(int * parseInt(float));

console.log(parseInt(float));
console.log(parseFloat(float));


var numeroComMuiasCasasDecimais = 123.345345345345345;
console.log(numeroComMuiasCasasDecimais);
var apenasDuasCasas = numeroComMuiasCasasDecimais.toFixed(4);
console.log(apenasDuasCasas);

//Aredondando o rsultado

var conta = (123 * 1.23) + (312 * 3.26);
var arredondado = parseFloat(conta.toFixed(2));

console.log(conta);
console.log(arredondado);



//bizarrices
var concat = 2 + '2';
console.log(concat - 2);

console.log('30' - 2);
console.log('32' - 2);
console.log('20' - 2);

console.log('Ola' - 2);

var toNunber = parseFloat(concat);
console.log(typeof toNunber);
console.log(typeof toString(toNunber));
console.log('ola ' + typeof Number('ola'));

var ola = "ola"
var teste = Number(ola);
console.log(teste);
*/