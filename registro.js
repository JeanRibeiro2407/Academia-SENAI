var nome, idade, peso, altura, imc, quadrado;


nome = prompt("Digite seu nome completo:");
idade = prompt("Digite sua idade:");

alert("Para calcularmos seu IMC, precisamos das próximas informações");

peso = prompt("Digite seu peso atual:");
altura = prompt("Digite sua altura atual:");

quadrado = altura * altura;

imc = peso / quadrado;

alert("Seu IMC atual é: " + imc);

if (imc < 18.5 && imc == 18.5){
    alert("Você está abaixo do peso ideal!");
} else {
        if (imc > 18.6 && imc < 24.9) {
            alert("Você está no peso ideal!");
        } else {
            if (imc > 25 && imc < 29.9) {
                alert("Você está levemente acima do peso!");
            } else {
                if (imc > 30 && imc < 34.9) {
                    alert("Você está com obesidade grau I!");
                } else {
                    if (imc > 35 && imc < 39.9) {
                        alert("Você está com obesidade grau II (severa)!");
                    } else {
                        if (imc > 40) {
                            alert("Você está com obesidade grau III (mórbida)");
                        }
                    }
                }
            }
        }
    }





