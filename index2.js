let numeroRandomico = Math.floor(Math.random() * 100) + 1;
let palpites = [];
let frasesDicas = ["Está quente,", "Olha a dica:", "Genius!", "Quase lá,", "Já disse,", "Calma," ,"Vai dar certo,"];

const formulario = document.getElementById('formulario');
const palpiteInput = document.getElementById('palpite');
const dicaText = document.getElementById('dicaText');
const palpitesAnteriores = document.getElementById('palpitesAnteriores');
const again = document.getElementById('again');
const bia = document.getElementById('bia');
const tittlePalpitesAnteriores = document.getElementById('tittlePalpitesAnteriores');

formulario.onsubmit = (event) => {
    event.preventDefault();

    if (palpites.length < 10) {
        let palpiteAtual = parseInt(palpiteInput.value);

        if (palpiteAtual == numeroRandomico) {
            again.classList.add('active');
            dicaText.innerHTML = ('Parabéns, Você adivinhou!');
            bia.src = "bia_feliz.svg";
            return;
        }

        let palpiteExistente = palpites.includes(palpiteAtual);

        if (palpiteExistente) {
            dicaText.innerHTML = ('Este palpite já foi dado Champs!');
            formulario.reset();
            return;
        }

        if (palpiteAtual < numeroRandomico) {
            let fraseAleatoria = frasesDicas[Math.floor(Math.random() * frasesDicas.length)];
            dicaText.innerHTML = `<strong>${fraseAleatoria}</strong> É um número maior que esse...`;
        } else {
            let fraseAleatoria = frasesDicas[Math.floor(Math.random() * frasesDicas.length)];
            dicaText.innerHTML = `<strong>${fraseAleatoria}</strong> É um número menor que esse...`;
        }

        palpites.push(palpiteAtual);
        palpitesAnteriores.innerHTML = palpites.join(' - ');
        formulario.reset();
    } else {
        again.classList.add('active');
        dicaText.innerHTML = (`Você não acertou, o número era: <strong>${numeroRandomico}</strong>`);
        bia.src = "bia_triste.svg";
    }

    // Exibir ou ocultar tittlePalpitesAnteriores
    if (palpites.length > 0) {
        tittlePalpitesAnteriores.style.display = 'block';
    } else {
        tittlePalpitesAnteriores.style.display = 'none';
    }
};

again.onclick = () => {
    window.location.reload();
};

let inputPrincipal = document.getElementById('palpite');
inputPrincipal.focus();
