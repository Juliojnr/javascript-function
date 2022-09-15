
function showImc (peso, altura) {
    let total = (peso / Math.pow(altura, 2));
    //onsole.log(`Seu imc é: ${total}`);

    return total;
}

module.exports = showImc;