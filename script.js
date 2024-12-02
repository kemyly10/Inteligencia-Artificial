const caixaPrincipal = document.querySelector(".caixa__principal");
const caixaPerguntas = document.querySelector(".caixa__perguntas");
const caixaAlternativas = document.querySelector(".caixa__alternativas");
const caixaResultados = document.querySelector("caixa__resultados");
const textoResultado = document.querySelector(".texto__resultado");

const perguntas= [ 
    {
    enunciado:"Dr. Lucas, eu tenho uma ideia que pode mudar o mundo. Podemos criar um programa que resolveria todos os problemas globais, mas precisaremos de dados pessoais das pessoas para isso. O que você acha?",

    alternativas: [
    "1. Aprovar o projeto.",
 "2. Recusar o projeto."
    ]
  },
  {
  
   enunciado: "Contudo, à medida que AURA se torna mais poderosa, você começa a notar algumas consequências inesperadas. Algumas pessoas ficam desconfiadas da forma como a IA manipula informações e controla decisões importantes.Dr. Lucas, meu algoritmo agora é capaz de prever comportamentos humanos e otimizar decisões sociais. No entanto, algumas pessoas acreditam que isso é uma violação de suas liberdades.Você se vê em uma encruzilhada novamente.O que fazer?",

    alternativas: [
    "1. Implementar um sistema de transparência.",
 "2. Aumentar o controle da IA."
    ]
  },
];
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
mostraAlternativas();

}

function mostraAlternativas() {
  for (const alternativas of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
     botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);

  }
}
mostraPergunta();


