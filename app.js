function pesquisar() {
    // Obter a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do atleta ou esporte.</p>"
      return 
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  console.log(campoPesquisa)

  // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
  

      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
  
          <p class="descricao-meta">${dado.descricao}</p>
  
          <a href=${dado.link}></a>
        </div>
      `;
      }

      // console.log(dado.titulo.includes(campoPesquisa))
      if (!resultados) {
          resultados = "<p>Nada foi encontrado</p>"
      }
    }
  
    // Atualiza o conteúdo da seção com os resultados construídos
    section.innerHTML = resultados;
  }