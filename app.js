// inicio da politica //
const noticias = [
  {
    id: 1,
    data: "10 de março de 2025",
    conteudos: [
      {
        titulo: "Eleições: Eduardo Brasileiro, do PT, é eleito prefeito de Almenara no 1º turno",
        conteudo: "Eduardo Brasileiro teve 53,25% dos votos dados a todos os candidatos...",
        imagem: "img/prefeitura.jpeg"
      },
      {
        titulo: "Quem é Eduardo Brasileiro?",
        conteudo: "Eduardo Brasileiro tem 57 anos, é casado, tem superior completo e declara à Justiça Eleitoral a ocupação de advogado. Ele declarou um patrimônio de R$ 2.039.005,02. O vice-prefeito eleito em Almenara é Reginaldo Chaves, do PSB, que tem 44 anos. Os dois fazem parte da coligação JUNTOS POR ALMENARA, formada pelos partidos PT, PCdoB, PV, PSB e PDT.",
        imagem: "img/eduardo.jpeg"
      }
    ]
  }
]

const parametros = new URLSearchParams(window.location.search);
const id = parseInt(parametros.get('id'));

const noticia = noticias.find(n => n.id === id);

if (noticia) {
  const container = document.getElementById("conteudo-noticia");
  noticia.conteudos.forEach(item => {
    container.innerHTML += `
      <h2>${item.titulo}</h2>
      <p><strong>Data:</strong> ${noticia.data}</p>
      <img src="${item.imagem}" alt="${item.titulo}" style="max-width: 100%; height: auto; margin: 15px 0;">
      <p>${item.conteudo}</p>
    `;
  });
} else {
  document.getElementById("conteudo-noticia").innerHTML = "<p>Notícia não encontrada.</p>";
}
// fim da politica //

