let numeroRandomico = Math.floor(Math.random() * 100) + 1;
let palpites = [];
let frasesDicas = ["Está quente,", "Olha a dica:", "Genius!", "Quase lá,", "Já disse,", "Calma," ,"Vai dar certo,"];

formulario.onsubmit = () => {
    event.preventDefault();

    if (palpites.length < 10) {
        let palpiteAtual = parseInt(palpite.value);

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

        if (palpites.length > 0) {
            document.getElementById('tittlePalpitesAnteriores').style.display = 'block';
        } else {
            document.getElementById('tittlePalpitesAnteriores').style.display = 'none';
        }
    } else {
        again.classList.add('active');
        dicaText.innerHTML = (`Você não acertou, o número era: <strong>${numeroRandomico}</strong>`);
        bia.src = "bia_triste.svg";
    }
};

again.onclick = () => {
    window.location.reload();
};


let inputPrincipal = document.getElementById('palpite');
palpite.focus();