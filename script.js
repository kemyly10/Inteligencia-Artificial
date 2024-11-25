const caixaPrincipal= document.queryselector(".caixa__principal");
const caixaPerguntas= document.querySelector(".caixa__perguntas");
const caixaAlternativas= document.querySelector(".caixa__alternativas");
const caixaResultados= document.queryselector("caixa__resultados");
const textoResultado= document.queryselector(".texto__resultado");

const perguntas=[ 
    {
    enunciado: "AURA: "Dr. Lucas, eu tenho uma ideia que pode mudar o mundo. Podemos criar um programa que resolveria todos os problemas globais, mas precisaremos de dados pessoais das pessoas para isso. O que você acha?"
    alternativas: [
        " 1. Aprovar o projeto:AURA pode começar a coletar dados pessoais, mesmo que isso levante questões éticas.";
 " 2. Recusar o projeto:Você decide que a privacidade das pessoas é mais importante, mesmo que isso signifique perder a chance de uma grande descoberta."
    ]
  },
  {
    enunciado: "Contudo, à medida que AURA se torna mais poderosa, você começa a notar algumas consequências inesperadas. Algumas pessoas ficam desconfiadas da forma como a IA manipula informações e controla decisões importantes.
AURA: "Dr. Lucas, meu algoritmo agora é capaz de prever comportamentos humanos e otimizar decisões sociais. No entanto, algumas pessoas acreditam que isso é uma violação de suas liberdades."
Você se vê em uma encruzilhada novamente. O que fazer?
"
    alternativas: [
        "1. Implementar um sistema de transparência:Criar um painel onde as pessoas possam ver como seus dados estão sendo usados e ter a opção de se excluir do sistema.";
 "2. Aumentar o controle da IA:Ignorar as preocupações e permitir que AURA continue a agir em nome do “bem maior”, mesmo que isso possa ser visto como autoritário."
    ]
  },
];

