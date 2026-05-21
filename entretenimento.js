const noticias = [
    {
      id: 4,
      data: "10 de março de 2025",
      conteudos: [
        {
          titulo: "A Praia da Saudade - Almenara MG ",
          conteudo: "Durante muito tempo, Almenara teve a maior praia fluvial do Brasil. A Praia da Saudade, que fica às margens do Rio Jequitinhonha, sempre foi um dos lugares mais marcantes da cidade. Com aquela faixa de areia branca enorme, era o ponto de encontro da galera pra nadar, jogar bola, fazer piquenique ou só relaxar. Ela tem uma vista bonita pro Morro do Cruzeiro e é cercada pela natureza, o que deixava o clima ainda mais especial. Mesmo com o tempo e algumas mudanças, continua sendo um lugar cheio de história e lembranças boas pra quem é da região.\n\nTour pelas áreas da nova orla de Almenara.",
          imagem: "img/praia.jpg"
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
        <div class="imagem-destaque">
          <img src="${item.imagem}" alt="${item.titulo}">
        </div>
        <h2>${item.titulo}</h2>
        <p><strong>Data:</strong> ${noticia.data}</p>
        <p>${item.conteudo}</p>
      `;
    });
  } else {
    document.getElementById("conteudo-noticia").innerHTML = "<p>Notícia não encontrada.</p>";
  }
  
  