/* Fazer o que tem que fazer */

const valorgasolina = 5.79;
const valoretanol = 6.66;
const distanciaKM = 100;
const combustivel = 'Gasolina';

if (combustivel === 'Etanol') {
    const consumoKM = 20;
    const litrosConsumido = distanciaKM/consumoKM;
    console.log(litrosConsumido.toFixed(2));
    console.log(combustivel)
    const valor = valoretanol * litrosConsumido;
    console.log(valor.toFixed(2));
}
else {
    const consumoKM = 10;
    const litrosConsumido = distanciaKM/consumoKM;
    console.log(litrosConsumido.toFixed(2));
    console.log(combustivel)
    const valor = valorgasolina * litrosConsumido;
    console.log(valor.toFixed(2));
}