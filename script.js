
pedra = document.querySelector('#je_1');
papel = document.querySelector('#je_2');
tesoura = document.querySelector('#je_3');

Jogada1_robo = document.querySelector('#robo_1')
Jogada2_robo = document.querySelector('#robo_2')
Jogada3_robo = document.querySelector('#robo_3')

Jogada_Jogador = 0;



function ExibirJogadaPedra() {
    pedra.style.display = 'block';
    papel.style.display = 'none';
    tesoura.style.display = 'none';
    Jogada_Jogador = 1;
    
    nm = JogadaRobo();
    Jogada_Robo =nm;
    ExibirJogadaRobo()
}

function ExibirJogadaPapel() {
    pedra.style.display = 'none';
    papel.style.display = 'block';
    tesoura.style.display = 'none';
    Jogada_Jogador = 2;
   
    nm = JogadaRobo();
    Jogada_Robo =nm;
    ExibirJogadaRobo()
    
}

function ExibirJogadaTesoura() {
    pedra.style.display = 'none';
    papel.style.display = 'none';
    tesoura.style.display = 'block';
    Jogada_Jogador = 3;

    nm = JogadaRobo();
    Jogada_Robo =nm;
    ExibirJogadaRobo()
    

}


function JogadaRobo() {
    return Math.floor(Math.random() * 3) + 1;
}

function ExibirJogadaRobo() {
    if (Jogada_Robo == 1) {
        Jogada1_robo.style.display = 'block'
        Jogada2_robo.style.display = 'none'
        Jogada3_robo.style.display = 'none'
    } else if (Jogada_Robo == 2) {
        Jogada1_robo.style.display ='none'
        Jogada2_robo.style.display = 'block'
        Jogada3_robo.style.display = 'none'
    } else {
        Jogada1_robo.style.display ='none'
        Jogada2_robo.style.display = 'none'
        Jogada3_robo.style.display = 'block'
    }

}

if











