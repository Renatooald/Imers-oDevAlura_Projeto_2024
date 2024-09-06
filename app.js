function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos pelo ID "resultados-pesquisa"
    let section = document.getElementById("resultados-pesquisa");
    // nome da variável em JS usa por padrão camelCase
    let  campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);
    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    if (!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Digite para pesquisar</p>";
        return
    }

    // Itera sobre cada item de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = "";

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Constrói o HTML para cada resultado, formatando os dados do objeto 'dado'
            resultados += `
            <div class="item-resultado">
            <h2> <a href="#" target="_blank">${dado.titulo}</a> </h2>
            <p class="descricao-meta">${dado.descricao}</p> 
            <a href="${dado.link}" target="_blank">link aqui</a>
            </div>`;
        }
    }
    if (!resultados){
        section.innerHTML = "<p>Nada foi encontrado.</p>";
    }
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}
