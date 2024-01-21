let numeroRandomico = Math.floor(Math.random() * 100) + 1;
let palpites = [];
let frasesDicas = ["Está quente,", "Olha a dica:", "Genius!", "Quase lá,", "Já disse,", "Calma," ,"Vai dar certo,"];

formulario.onsubmit = () => {
    event.preventDefault();

    if(palpites.length < 10){

        let palpiteAtual = parseInt(palpite.value);

        if(palpite.value == numeroRandomico){
            again.classList.add('active');
            dicaText.innerHTML = ('Parabéns, Você adivinhou!');
            bia.src = "bia_feliz.svg";
            return;
        }
    
        if(palpites.includes(palpite.value)){
            dicaText.innerHTML = ('Este palpite já foi dado champs!');
            formulario.reset();
            return;
            
        }
        
        if(palpite.value < numeroRandomico){
            let fraseAleatoria = (frasesDicas[Math.floor(Math.random() * frasesDicas.length)]);
            dicaText.innerHTML = `<strong>${fraseAleatoria}</strong> É um número maior que esse...`;
        }else{
            let fraseAleatoria = frasesDicas[Math.floor(Math.random() * frasesDicas.length)];
        dicaText.innerHTML = `<strong>${fraseAleatoria}</strong> É um número menor que esse...`;
        }
        
        palpites.push(palpite.value);
        palpitesAnteriores.innerHTML = palpites.join(' - ');
        formulario.reset();
        
    }else{
        again.classList.add('active');
        dicaText.innerHTML = (`Você não acertou, o número era: <strong>${numeroRandomico}</strong>`);
        bia.src = "bia_triste.svg";
    }

};

again.onclick = () => {
    window.location.reload();
}