const perguntas = [
    {
        titulo: "Qual dos países abaixo foi campeão da Copa do Mundo de 2014?",
        alternativas: ["Alemanha", "Espanha", "Argentina", "França"],
        correta: "Alemanha",
    },
    {
        titulo: "Qual era o Nome da bola da Copa do Mundo de 2010?",
        alternativas: ["Cafusa", "Bulajani", "Jabulani", "Telstar"],
        correta: "Jabulani"
    },
    {
        titulo: "Quem é considerado o pai do futebol no Brasil?",
        alternativas: ["Charles Drummond", "Pelé", "Charles Miller", "Ronaldo"],
        correta: "Charles Miller"
    },
    {
        titulo: "Qual a função do cartão amarelo?",
        alternativas: ["Expulsar jogador do campo", "Advertir jogador", "Não permite o jogador encostar na bola por 5 minutos", "Força a substituição do jogador"],
        correta: "Advertir jogador"
    },
    {
        titulo: "Em que ano surgiram as primeiras regras?",
        alternativas: ["1835", "1930", "1850", "1830"],
        correta: "1830"
    },
    {
        titulo: "Quando foi realizada a primeira Copa do Mundo?",
        alternativas: ["1930", "1934", "1938", "1926"],
        correta: "1930"
    },
    {
        titulo: "Qual desses jogadores está na lista dos 10 maiores artilheiros?",
        alternativas: ["Ribamar", "Rivaldo", "Diego Maradona", "Pelé"],
        correta: "Pelé"
    },
    {
        titulo: "Qual o nome do estádio do Vasco?",
        alternativas: ["São Januário", "Pedro Alvares Cabral", "Maracanã", "São Miguel"],
        correta: "São Januário"
    },
    {
        titulo: "Quem é o responsável por indicar o impedimento?",
        alternativas: ["Árbitro", "Auxiliar Superior", "Bandeirinha", "VAR"],
        correta: "Bandeirinha"
    },
    {
        titulo: "Qual o tamanho médio de um campo de futebol?",
        alternativas: ["90m - 120m", "120m - 140m", "60m - 80m", "140m - 150m"],
        correta: "90m - 120m"
    },
    {
        titulo: "Numa partida de futebol, quantos jogadores estão em campo?",
        alternativas: ["11", "20", "22", "33"],
        correta: "22"
    },
    {
        titulo: "Quanto tempo dura uma partida de futebol? (desconsiderando acréscimos e prorrogações)",
        alternativas: ["45 minutos", "90 minutos", "100 minutos", "120 minutos"],
        correta: "90 minutos"
    },
    {
        titulo: "Quem pode acrescentar tempo à partida de futebol?",
        alternativas: ["Juiz", "Capitão do Time", "Técnico", "Diretor da partida"],
        correta: "Juiz"
    },
    {
        titulo: "Qual país é o maior vencedor da Copa do Mundo da FIFA?",
        alternativas: ["Alemanha", "Argentina", "Inglaterra", "Brasil"],
        correta: "Brasil"
    },
    {
        titulo: "Quanto tempo dura uma prorrogação?",
        alternativas: ["5 minutos", "10 minutos", "15 minutos", "20 minutos"],
        correta: "15 minutos"
    },
    {
        titulo: "Quantas substituições uma equipe pode fazer durante a partida?",
        alternativas: ["1", "2", "3", "4"],
        correta: "3"
    },
    {
        titulo: "Onde foi sediada a Copa do Mundo de 2022?",
        alternativas: ["Arábia Saudita", "Catar", "Egito", "Marrocos"],
        correta: "Catar"
    },
    {
        titulo: "O que acontece quando um jogador recebe dois cartões amarelos?",
        alternativas: ["Ele é suspenso por 15 minutos", "Ele recebe um cartão vermelho e é expulso", "Ele deve ser substituído", "O time adversário cobra um pênalti"],
        correta: "Ele recebe um cartão vermelho e é expulso"
    },
    {
        titulo: "Qual desses jogadores iniciou uma carreira política?",
        alternativas: ["Zidane", "Ronaldo", "Romário", "Ronaldinho"],
        correta: "Romário"
    },
    {
        titulo: "Por quanto tempo um goleiro pode segurar a bola?",
        alternativas: ["3 segundos", "5 segundos", "6 segundos", "9 segundos"],
        correta: "6 segundos"
    },

];

function randomizarPerguntas(){
    let perguntasAleatorias = [];
    while (perguntasAleatorias.length < 5){
        let rng = Math.floor(Math.random() * perguntas.length);

        if (localStorage.getItem(rng) == null){
            perguntasAleatorias.push(perguntas[rng]);
        }
    }
    return perguntasAleatorias;
}

let perguntasAleatorias = randomizarPerguntas();

const quiz = document.getElementById("quiz");

for(let i=0; i<5; i++){
    divPergunta = document.createElement("div");
    
    titulo = document.createElement("h2");
    titulo.innerHTML = perguntasAleatorias[i].titulo;
    divPergunta.appendChild(titulo);
    for(let j=0; j<4; j++){
        divInput = document.createElement("div");
        input = document.createElement("input");
        input.type = "radio";
        input.name = "pergunta-" + i;
        input.id = "pergunta-" + i + "-alt-" + j;
        input.value = j;
        input.classList.add("input-quiz");
        divInput.append(input);
        label = document.createElement("label");
        label.for = "pergunta-" + i + "-alt-" + j;
        label = innerHTML = perguntasAleatorias[i].alternativas[j];
        divInput.append(label);
        divPergunta.append(divInput);
    }
    
    quiz.append(divPergunta);


}


