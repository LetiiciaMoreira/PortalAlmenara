// inicio esporte //
const noticias = [
    {
      id: 2,
      data: "10 de março de 2025",
      conteudos: [
        {
          titulo: "Almenara Campeã do Campeonato Mineiro de Handebol Juvenil Masculino",
          conteudo: "A Prefeitura de Almenara tem a grande alegria de anunciar uma conquista histórica para a nossa cidade e para todo o Vale do Jequitinhonha: a equipe de Handebol Juvenil Masculino de Almenara sagrou-se campeã do Campeonato Mineiro de Handebol Juvenil Masculino! Este triunfo inédito ocorreu nos dias 17, 18 e 19 de maio, em Manhuaçu, durante a competição organizada pela Federação Mineira de Handebol. Este marco não apenas coloca Almenara no mapa do esporte estadual, mas também simboliza o resultado de um investimento contínuo no desenvolvimento dos nossos jovens atletas. O desempenho brilhante da equipe foi coroado com reconhecimentos individuais excepcionais.",
          imagem: "img/handebol.jpeg"
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
  // final esporte //
  