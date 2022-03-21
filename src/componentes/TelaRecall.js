import LogoZapRecall from "../assets/logo-pequeno.png"
import Progresso from "./Progresso";
import Resultado from "./Resultado";

import { useState } from "react";


function TelaRecall() {
    const [progresso, setProgresso] = useState(
        {
            numeroDeFlashcards: 4,
            flashcardsRespondidos: 0,
            icones: ["checkmark-circle", "checkmark-circle", "checkmark-circle", "checkmark-circle"],
            respostas: ["nao-lembrei"]
        })


    const [finalizado, setFinalizado] = useState(false);

    if (progresso.respostas.length === progresso.numeroDeFlashcards) {
        setFinalizado(true);
    }

    return (
        <>
            <header>
                <img src={LogoZapRecall} alt="logo-zap-recall" />
                <h1>ZapRecall</h1>
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