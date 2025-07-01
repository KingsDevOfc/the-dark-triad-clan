me-dark");
  if (!document.body.classList.contains("theme-dark")) {
    document.body.classList.toggle("theme-blue");
  }
});

// FullCalendar
document.addEventListener("DOMContentLoaded", function() {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    locale: "pt-br",
    events: [
      { title: "Treino Geral", date: "2025-07-05" },
      { title: "Campeonato", date: "2025-07-15" }
    ]
  });
  calendar.render();
});

// Frases motivacionais
const frases = [
  "Lealdade ao Triângulo acima de tudo!",
  "Nossos inimigos caem diante da disciplina.",
  "Honra, estratégia e evolução.",
  "A força do clã é a força de todos.",
  "No THE DARK TRIAD, você jamais luta sozinho.",
  "A evolução vem da persistência.",
  "Treinar hoje é conquistar amanhã.",
  "Cada queda te deixa mais forte.",
  "Nunca desista do Triângulo.",
  "Seu lugar no ápice depende da sua superação."
];
let fraseEl = document.getElementById("frase-motivacional");
setInterval(() => {
  let random = Math.floor(Math.random() * frases.length);
  fraseEl.textContent = frases[random];
}, 5000);

// Compartilhar
const shareButton = document.getElementById("share-button");
shareButton.addEventListener("click", () => {
  if (navigator.share) {
    navigator.share({
      title: "THE DARK TRIAD CLAN",
      text: "Venha conhecer nosso clã no Combat Warriors!",
      url: window.location.href
    });
  } else {
    alert("Seu navegador não suporta compartilhamento automático, copie o link manualmente.");
  }
});
