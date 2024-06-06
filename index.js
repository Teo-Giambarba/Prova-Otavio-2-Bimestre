// Cria a tabela
const table = document.createElement("table");
const thead = document.createElement("thead");
table.appendChild(thead);
const tbody = document.createElement("tbody");
table.appendChild(tbody);

// THs de indentificação
th_labels = ["Nome", "Matricula", "Nota 1", "Nota 2", "Média", "Situação"];
let tr = document.createElement("tr");
for (let i = 0; i < th_labels.length; i++) {
    let th_letra = document.createElement("th");
    th_letra.innerHTML = th_labels[i];
    tr.appendChild(th_letra);
}
tbody.appendChild(tr);

// Deus pai esqueci o outro jeito de achar a main
let main = document.querySelector("main");
main.appendChild(table);


// Lida com o envio dos formularios
function enviar(event) {
    // Nos deixa usar o formulário de qualquer maneira que quisermos
    event.preventDefault();

    // Pega os valores do formulário
    let nome = event.target[0].value;
    let matricula = event.target[1].value;
    let nota1 = event.target[2].value;
    let nota2 = event.target[3].value;

    // Verifica se o usuário fez um erro na inserção e o alerta
    if(!nome || !matricula || !nota1 || !nota2) {
        alert("Por favor insira correamente os dados");
        return
    }
    /* 
    console.log(nome); // DEBUG
    console.log(matricula); // DEBUG
    console.log(nota1); // DEBUG
    console.log(nota2); // DEBUG
    */

    // Manda os valores para atualizar a tabela
    updateTabela([nome, matricula, nota1, nota2])
}


//Atualiza a tabela com os novos valores
function updateTabela(elementos) {
    tr = document.createElement("tr");
    for (let i = 0; i < elementos.length; i++) {
        let td = document.createElement("td");
        td.innerHTML = elementos[i];
        tr.appendChild(td);
    }

    // Calcula a média simples das notas
    let media = (parseInt(elementos[2]) + parseInt(elementos[3]))/2;
    let td_media = document.createElement("td");
    td_media.innerHTML = media;
    tr.appendChild(td_media);

    //Verifica o estado do aluno, se media > 5 : Aprovado, se <= 5 : Reprovado
    let td_situacao = document.createElement("td");
    if (media > 5) {
        td_situacao.innerHTML = "Aprovado";
    }
    else {
        td_situacao.innerHTML = "Reprovado";
    }
    tr.appendChild(td_situacao);
    
    tbody.appendChild(tr);
}