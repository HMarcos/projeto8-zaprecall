import LogoZapRecall from "../assets/logo-pequeno.png"
import Progresso from "./Progresso";
import Resultado from "./Resultado";

import { useState } from "react";


function TelaRecall() {
    const [progresso, setProgresso] = useState(
        {
            numeroDeFlashcards: 4,
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
                <h1 onClick={() => {
                    console.log("teste");
                    atualizarProgresso({ icone: "checkmark-circle", resposta: "nao-lembrei" });
                }}>ZapRecall</h1>
            </header>

            <main className="flashcards">
                <h2> Perguntas</h2>
            </main>

            <footer className="progresso-e-resultados">
                {finalizado === false ? <Progresso progresso={progresso} /> : <Resultado progresso={progresso} />}
            </footer>
        </>
    )
}

export default TelaRecall;