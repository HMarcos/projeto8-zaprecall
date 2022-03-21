import { useState } from "react";

function Flashcard(props) {
    const { pergunta, resposta } = props.flashcard;
    const indice = props.indice + 1;

    const [status, setStatus] = useState("inicial");

    let flashcard = null;

    switch (status) {
        default: // Estado inicial
            flashcard =
                <article className="flashcard inicial">
                    <span>Pergunta {indice}</span>
                    <ion-icon name="play-outline"></ion-icon>
                </article>
    }

    return flashcard;
    
}

export default Flashcard;