function ObterDeack() {
    const deck = [
        {
            pergunta: "O que é JSX?",
            resposta: "Uma extensão de linguagem do JavaScript.",
        },
        {
            pergunta: "O React é __",
            resposta: "uma biblioteca JavaScript para construção de interfaces.",
        },
        {
            pergunta: "Componentes devem iniciar com __ ",
            resposta: "letra maiúscula.",
        },
        {
            pergunta: "Podemos colocar __ dentro do JSX",
            resposta: "expressões",
        },
        {
            pergunta: "Componentes devem iniciar com __ ",
            resposta: "letra maiúscula.",
        },
        {
            pergunta: "Componentes devem iniciar com __ ",
            resposta: "letra maiúscula.",
        },
        {
            pergunta: "Componentes devem iniciar com __ ",
            resposta: "letra maiúscula.",
        },
        {
            pergunta: "Componentes devem iniciar com __ ",
            resposta: "letra maiúscula.",
        }
    ]

    const deckEmbaralhado = embaralharDeack(deck);
    return deckEmbaralhado;
}

function embaralharDeack(deck){
    return deck.sort(comparador);
}

function comparador() { 
	return Math.random() - 0.5; 
}


export default ObterDeack;