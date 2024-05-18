
pedra = document.querySelector('#je_1');
papel = document.querySelector('#je_2');
tesoura = document.querySelector('#je_3');

Jogada1_robo = document.querySelector('#robo_1');
Jogada2_robo = document.querySelector('#robo_2');
Jogada3_robo = document.querySelector('#robo_3');

empate = document.querySelector('#caso_empate');

P_robo = document.getElementById('pontos_robo');
P_jg1 = document.getElementById('pontos_jogador')

Pontos_robo = 0
Pontos_jogador = 0

Reset_Pontos = document.querySelector('.pontuacao')
Reset_Jogadas = document.querySelector('.jogada_escolhida')
Reset = document.querySelector('.jogadas')

msg_winjogador = document.querySelector('.ganhador')
msg_winrobo = document.querySelector('.perdedor')

btn = document.querySelector('.btn_reset')

function ExibirJogada(jogada) {
    // Ocultar todas as jogadas primeiro
    pedra.style.display = 'none';
    papel.style.display = 'none';
    tesoura.style.display = 'none';

    // Exibir a jogada do jogador
    if (jogada === 'pedra') {
        pedra.style.display = 'block';
        Jogada_Jogador = 1;
    } else if (jogada === 'papel') {
        papel.style.display = 'block';
        Jogada_Jogador = 2;
    } else if (jogada === 'tesoura') {
        tesoura.style.display = 'block';
        Jogada_Jogador = 3;
    }

    // Fazer a jogada do robô
    Jogada_Robo = JogadaRobo();
    ExibirJogadaRobo();

    // Sistema do jogo

    if (jogada == 'pedra' && Jogada_Robo == 1) {
        empate.style.display = 'block';
    } else if (jogada == 'pedra' && Jogada_Robo == 2) {
        Pontos_robo = Pontos_robo + 1;
        P_robo.innerHTML = Pontos_robo;
        empate.style.display = 'none';
    } else if (jogada == 'pedra' && Jogada_Robo == 3) {
        Pontos_jogador = Pontos_jogador + 1;
        P_jg1.innerHTML = Pontos_jogador;
        empate.style.display = 'none';
    } else if (jogada == 'papel' && Jogada_Robo == 1) {
        Pontos_jogador = Pontos_jogador + 1;
        P_jg1.innerHTML = Pontos_jogador;
        empate.style.display = 'none';
    } else if (jogada == 'papel' && Jogada_Robo == 2) {
        empate.style.display = 'block';
    } else if (jogada == 'papel' && Jogada_Robo == 3) {
        Pontos_robo = Pontos_robo + 1;
        P_robo.innerHTML = Pontos_robo;
        empate.style.display = 'none';
    } else if (jogada == 'tesoura' && Jogada_Robo == 1) {
        Pontos_robo = Pontos_robo + 1;
        P_robo.innerHTML = Pontos_robo;
        empate.style.display = 'none';
    } else if (jogada == 'tesoura' && Jogada_Robo == 2) {
        Pontos_jogador = Pontos_jogador + 1;
        P_jg1.innerHTML = Pontos_jogador;
        empate.style.display = 'none';
    } else if (jogada == 'tesoura' && Jogada_Robo == 3) {
        empate.style.display = 'block';
    }

    // ---------------------------------------------------------- fim de jogo

    if (Pontos_jogador == 10) {
        Reset_Pontos.style.display = 'none';
        Reset_Jogadas.style.display = 'none';
        Reset.style.display = 'none';
        msg_winjogador.style.display = 'block';
        btn.style.display = 'block';
    } else if (Pontos_robo == 10) {
        Reset_Pontos.style.display = 'none';
        Reset_Jogadas.style.display = 'none';
        Reset.style.display = 'none';
        msg_winrobo.style.display = 'block';
        btn.style.display = 'block';
    }


}



function JogadaRobo() {
    return Math.floor(Math.random() * 3) + 1;
}


function ExibirJogadaRobo() {

    if (Jogada_Robo == 1) {
        Jogada1_robo.style.display = 'block';
        Jogada2_robo.style.display = 'none';
        Jogada3_robo.style.display = 'none';
    } else if (Jogada_Robo == 2) {
        Jogada1_robo.style.display ='none';
        Jogada2_robo.style.display = 'block';
        Jogada3_robo.style.display = 'none';
    } else {
        Jogada1_robo.style.display ='none';
        Jogada2_robo.style.display = 'none';
        Jogada3_robo.style.display = 'block';
    }

}







