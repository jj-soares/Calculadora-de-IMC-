



function calcImc() {
    const altura = (document.getElementById("input-altura").value) / 100
    const peso = document.getElementById("input-peso").value


    let imc = peso / altura ** 2
    let text = ""
    
    if (imc <= 18.5) {
        text = "Você esta abaixo do peso, melhore a sua alimentaçâo!"
    } else if (imc <= 24.9) {
        text = "Esta no peso Ideal, Parabens!"
    } else if (imc <= 29.9) {
        text = " Esta levemente acima do peso, cuidado!!"
    } else if (imc <= 34.9) {
        text = "Você esta com Obsidade nivel 1 !!!"
    } else if (imc <= 39.9) {
        text = "Você esta com Obsidade nivel 2 (Severa)"
    } else if (imc >= 40) {
        text = " Você esta com Obesidade nivel 3 (Morbida)"
    }

    document.getElementById("textarea").innerText = text
}



