import LogoZapRecall from "../assets/logo-pequeno.png"
import Progresso from "./Progresso";
import Resultado from "./Resultado";
import Deck from "./Deck";

import { useState } from "react";

import ObterDeack from "./ObterDeck";

const deck = ObterDeack();

function TelaRecall() {
    const [progresso, setProgresso] = useState(
        {
            numeroDeFlashcards: deck.length,
            flashcardsRespondidos: 0,
            icones: [],
            respostas: [],
        })

    const [finalizado, setFinalizado] = useState(false);

    function atualizarProgresso(infoProgresso) {
        const { icone, resposta } = infoProgresso;
        const flashcardsRespondidosAtualizados = progresso.flashcardsRespondidos + 1;
        const iconesAtualizados = [...progresso.icones, icone];
        const respostasAtualizadas = [...progresso.respostas, resposta];
        setProgresso({
            ...progresso,
            flashcardsRespondidos: flashcardsRespondidosAtualizados,
            icones: iconesAtualizados,
            respostas: respostasAtualizadas
        });

        if (flashcardsRespondidosAtualizados === progresso.numeroDeFlashcards) {
            setFinalizado(true);
        }
    }

    return (
        <>
            <header>
                <img src={LogoZapRecall} alt="logo-zap-recall" />
                <h1>ZapRecall</h1>
            </header>

            <main className="deck">
                <Deck deck={deck} atualizarProgresso={atualizarProgresso} />
            </main>

            <footer className="progresso-e-resultado">
                {finalizado === false ? <Progresso progresso={progresso} /> : <Resultado progresso={progresso} />}
            </footer>
        </>
    )
}

export default TelaRecall;