function mudarBackground(){
    cor = document.getElementById("principal").value;
    document.body.style.backgroundColor = cor;
}

function mudarCorTexto(){
    cor = document.getElementById("fonte-principal").value;
    document.body.style.color = cor;
}


function mudarTamanhoFonte(){
    tamanho = document.getElementById("tamanho-fonte").value + "px";
    document.body.style.fontSize = tamanho;
}


function escreverCalendario(){
    data = new Date();
    ano = data.getFullYear();
    mes = data.getMonth();
    diaAtual = data.getDate();

    primeiroDiaMes = new Date(ano, mes, 1);
    diaSemanaInicial = primeiroDiaMes.getDay();
    totalDias = new Date (ano, mes+1, 0).getDate();

    meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    semana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    
    titulo = document.createElement("h2");
    titulo.innerHTML = "Calendário de " + meses[mes] + " de " + ano;
    divCalendario = document.getElementById("calendario");
    divCalendario.appendChild(titulo);

    calendario = document.createElement("table");
    thead = document.createElement("thead");
    trSemana = document.createElement("tr");

    divCalendario.appendChild(calendario);
    calendario.appendChild(thead);
    thead.appendChild(trSemana);

    for(let i = 0; i < 7; i++){
        diaSemana = document.createElement("th");
        diaSemana.innerHTML = semana[i];
        trSemana.appendChild(diaSemana);
    }

    tbody = document.createElement("tbody");
    calendario.appendChild(tbody);
   

    let dia = 1;
    let tr, td;

    for (let i = 0; i < 6; i++){
        tr = document.createElement("tr");
        tbody.appendChild(tr);
        for (let j = 0; j < 7; j++){
            td = document.createElement("td");
            if (i == 0 && j < diaSemanaInicial){
                td.innerHTML = "";
            }
            else if (dia > totalDias){
                break;
            }
            else{
                td.innerHTML = dia;
                if (dia == diaAtual){
                    td.classList.add("dia-atual");
                }
                dia++;
                
            }
            tr.appendChild(td);
        }

    }

}

function carregarImagem(){


    imagens = ["img/futebol.jpg", "img/futebol2.webp", "img/futebol3.jpg"];

    img = document.getElementById("img");
    imagemAtual = localStorage.getItem("imagemAtual");
    imagemAtual = Number(imagemAtual)

    if(!imagemAtual || imagemAtual > 2){
        imagemAtual = 0;        
    }

    
    
    img.src = imagens[imagemAtual]; 
    imagemAtual+=1;

    localStorage.setItem("imagemAtual", imagemAtual);


}


function escreverDatas(){
    nascimentoInput = document.getElementById("nascimento").value;

    nascimento = new Date(nascimentoInput);

    descEventos = ["Retorno do futebol", "Criação das Regras", "Primeiro uso dos cartões / Copa do México", "Fundação da Football Association", "Fundação da FIFA", "Primeira Copa do Mundo", "Copa do Mundo de 2022", "Chegada do futebol ao Brasil", "Fundação da Associação Atlética Mackenzie College", "Fundação do Fluminense"];
    posicaoEventos = ["retorno", "criacaoRegras", "usoCartao", "FA", "FIFA", "primeiraCopa", "Copa2022", "chegadaBrasil", "Mackenzie", "Fluminense"];
    datas = ["1681-01-01", "1830-01-1", "1970-05-31", "1861-10-26", "1904-05-21", "1930-07-13", "2022-11-20", "1894-01-01", "1898-08-18", "1902-07-21"];
    
    
    
    for(let i = 0; i < 10; i++){
        dataEvento = new Date(datas[i]);
                
        if (nascimento > dataEvento){ // Nasceu depois do evento
            
            diferenca = nascimento - dataEvento;

            dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            meses = Math.floor(dias / 30.44);
            anos = Math.floor(meses / 12);
            
            p = document.getElementById(posicaoEventos[i]);
            p.innerHTML = descEventos[i] + ": " + dias + " dias (corridos), " + meses + " meses (corridos) e " + anos + " anos (corridos) antes do seu nascimento";
        }
        else if (nascimento < dataEvento){ // Nasceu antes do evento
            
            diferenca = dataEvento - nascimento;
            
            dataDiferenca = new Date(diferenca);

            dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            meses = Math.floor(dias / 30.44);
            anos = Math.floor(meses / 12);

            p = document.getElementById(posicaoEventos[i]);
            p.innerHTML = descEventos[i] + ": " + dias + " dias (corridos) " + meses + " meses (corridos) e " + anos + " anos (corridos) depois do seu nascimento";
        }
        else{
            p = document.getElementById(posicaoEventos[i]);
            p.innerHTML = descEventos[i] + ":" + " no dia do seu nascimento!!";
        }

    }
    
}

function incluirEvento(){
    
    section = document.createElement("section");
    h2 = document.createElement("h2");
    h2.innerHTML = document.getElementById("titulo").value;
    
    section.appendChild(h2);

    divContainer = document.createElement("div");
    divContainer.classList.add("container")
    divTexto = document.createElement("div");
    divTexto.classList.add("texto");
    p = document.createElement("p");
    descricao = document.getElementById("descricao").value;
    p.innerHTML = descricao;
    section.appendChild(divContainer)
    divContainer.appendChild(divTexto);
    divTexto.appendChild(p);


    document.getElementById("Eventos").appendChild(section);

    

}

function carregarCarrossel(){
    carrosel = document.getElementById("carrossel");
    imagens = carrosel.getElementsByTagName("img");

    atual = 0;

    function proximo(){
        imagens[atual].classList.remove("atual");
        atual = (atual + 1) % imagens.length;
        imagens[atual].classList.add("atual");
    }

    function anterior(){
        imagens[atual].classList.remove("atual");
        atual = (atual - 1 + imagens.length) % imagens.length;
        imagens[atual].classList.add("atual");
    }

    botaoAnterior = document.getElementById("anterior");
    botaoAnterior.addEventListener("click", anterior);

    botaoProximo = document.getElementById("proximo");
    botaoProximo.addEventListener("click", proximo);

}
