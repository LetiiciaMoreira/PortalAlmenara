// inicio cultura //
const noticias = [
    {
      id: 3,
      data: "10 de março de 2025",
      conteudos: [
        {
          titulo: "Memorial Cultural Dr. Wilson da Cunha Benevides",
          conteudo: "A região vive essencialmente da pecuária, artesanato e terceiros... O Memorial Cultural Dr. Wilson da Cunha Benevides surgiu de uma adaptação feita na antiga caixa d'água, reservatório que abastecia a cidade com a água de um Córrego no alto do Morro que se denomina Córrego dos Cachorros. A obra foi construída na década de 50. Com a vinda da empresa de abastecimento de água para a cidade, a caixa d’água perde sua função principal e fica abandonada por décadas. Durante todo esse tempo sem utilidade, muitas pessoas ligadas à cultura da cidade sonharam em transformá-la em uma casa que abrigasse a cultura. Muitos projetos foram propostos, mas somente em 2012 foi contemplado o projeto do memorial, que tem seu nome em homenagem a um bioquímico da cidade de Rubim, Dr. Wilson da Cunha Benevides, que adotou Almenara como segunda terra e participou ativamente da vida política e social da cidade. O Memorial Cultural é um local que guarda uma parte da Memória da cidade, tem exposição de artesanatos, fotos antigas da cidade e de personalidades, objetos e livros de pesquisa. Atualmente abriga o Departamento Municipal de Cultura.",
          imagens: [
            "img/memorial.jpg",
            "img/memorial2.jpg"
          ]
        }
      ]
    }
  ];
  
  const parametros = new URLSearchParams(window.location.search);
  const id = parseInt(parametros.get('id'));
  
  const noticia = noticias.find(n => n.id === id);
  
  if (noticia) {
    const container = document.getElementById("conteudo-noticia");
    noticia.conteudos.forEach(item => {
      container.innerHTML += `
        <div class="imagem-dupla">
          ${item.imagens.map(img => `<img src="${img}" alt="${item.titulo}">`).join('')}
        </div>
        <h2>${item.titulo}</h2>
        <p><strong>Data:</strong> ${noticia.data}</p>
        <p>${item.conteudo}</p>
      `;
    });
  } else {
    document.getElementById("conteudo-noticia").innerHTML = "<p>Notícia não encontrada.</p>";
  }
  // final cultura //