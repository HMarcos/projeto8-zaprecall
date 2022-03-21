import LogoZapRecall from "../assets/logo-pequeno.png"
import Progresso from "./Progresso";

import { useState } from "react";

function TelaRecall() {
    const [progresso, setProgresso] = useState(
        {
            numeroDeFlashcards: 4,
            flashcardsRespondidos: 0,
            icones: []
        })

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
                <Progresso progresso={progresso}/>
            </footer>
        </>
    )
}

export default TelaRecall;