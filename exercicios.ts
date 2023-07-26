// exercicio 1



import promptSync from "prompt-sync";
const prompt = promptSync();

export function exercicio1Salario():void {
    
    
    let nome:string = prompt('Digite seu nome: ')
    let cargo:string = prompt('Digite seu cargo: ')
    let salario:number = parseFloat( prompt('Digite seu salario: '))
    
    if (salario < 1000) {
        salario = salario + (salario * 0.1)
        console.log('nome: '+ nome +' cargo: ' + cargo +' salario: '+ salario )    
    }
    
    else{
        console.log ('Voce ja ganha o suficiente, contente-se com seu contracheque')
        
    }}

//exercicio 2

export function exercicio2Aumento():void {
    
    
    let salario:number = parseFloat( prompt('Digite seu salario: '))
    
    if (salario < 500) {
        salario = salario + (salario * 0.3)
        console.log('Salario Reajustado: '+ salario)
    }
    else if (salario > 500) {
        console.log('Sem direito a reajuste')
        
    }
}
    
// exercicio 3

export function exercicio3NumPosNeg():void {
    
    
    let numero:number = parseInt(prompt ('Digite um numero: '))
    
    if (numero > 0) {
        console.log('O numero digitado e positivo')
        
    }
    else {
        console.log('O numero digitado e negativo')
    }
}

//4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

export function exercicio4tabuada():void {
    
    
    let numero:number = parseInt(prompt('Digite o numero a ser multiplicado: '))
    
    for (let contador = 0; contador <=10; contador++) {
        console.log(`${numero*contador}`);
        
    }
}

// exercicio 5

export function exercicio5maiorvalor():void {
    
    
    let pval:number = parseInt(prompt('Digite o primeiro valor: '))
    let sval:number = parseInt(prompt('Digite o segundo valor: '))
    
    if (pval > sval) {
        console.log( 'O maior valor e: '+ pval +'')
        
    }
    else if (sval > pval) {
        console.log( 'O maior valor e: '+ sval +'')
    }
    
    else {
        console.log( 'Os valores sao iguais')
    }
}

// exercicio 6

export function exercicio6medianota():void {
    
    
    let n1:number = parseFloat(prompt ('Digite a primeira nota:'))
    let n2:number = parseFloat(prompt ('Digite a segunda nota:'))
    let n3:number = parseFloat(prompt ('Digite a terceira nota:'))
    let n4:number = parseFloat(prompt ('Digite a quarta nota:'))
    
    let media:number = (n1 + n2 + n3 + n4)/4
    
    if (media>=7) {
        
        console.log ('Media: '+ media + ' Aluno aprovado!')    
    }
    
    else if (media>=5 && media<7 ) {
        console.log ('Media: ' + media + ' Aluno em recuperacao!')    
    }
    
    else{
        console.log ('Media: ' + media + ' Aluno reprovado!')
    }
}
