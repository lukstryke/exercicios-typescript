import promptSync from "prompt-sync"; // chamar o pacote (prompt sync)
import{ exercicio1Salario, exercicio2Aumento, exercicio3NumPosNeg, exercicio4tabuada, exercicio5maiorvalor, exercicio6medianota } from "./exercicios"
let exercicio:string; // declaracao da variavel (pegar o dado do usuario)
const prompt = promptSync(); // importa a funcao do prompt (caixa de texto onde o usuario vai digitar)


let nome = 'lucas'
console.log(nome);




let continuar:string

do {
    exercicio = prompt('Digite o numero do exercicio a ser executado(1 a 6): ')

    switch (exercicio) {
        case "1":
            exercicio1Salario() // chamar a funcao necessita de parenteses
            break;
        case "2":
            exercicio2Aumento() 
            break;
        case "3":
            exercicio3NumPosNeg() 
            break;
        case "4":
            exercicio4tabuada() 
            break;
        case "5":
            exercicio5maiorvalor() 
            break;
        case "6":
            exercicio6medianota() 
            break;

        default:
            console.log('Numero errado parceiro');
            break;
    }
   continuar = prompt('Deseja continuar? Digite S para Sim e N para Nao: '). toLocaleLowerCase();
} while (continuar === 's');
console.log(continuar);