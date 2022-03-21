import { useState } from "react";

import Setinha from "../assets/setinha.png";

function Flashcard(props) {
    const { pergunta, resposta } = props.flashcard;
    const indice = props.indice + 1;

    const [status, setStatus] = useState("inicial");

    

    let flashcard = null;

    switch (status) {
        case "perguntando":
            flashcard =
                <article className=" flashcard perguntando">
                    <p>{pergunta}</p>
                    <img src={Setinha} alt="revelar-resposta" onClick={() => setStatus("respondendo")} />
                </article>
            break;

        case "respondendo":
            flashcard =
                <article className=" flashcard respondendo">
                    <p>{resposta}</p>
                    <div className="botoes-respostas">
                        <button className="nao-lembrei"> Não <br/> lembrei</button>
                        <button className="quase-nao-lembrei"> Quase não lembrei</button>
                        <button className="zap"> Zap!</button>
                    </div>
                </article>
            break;

        case "respondido":
            break;
        default: // Estado inicial
            flashcard =
                <article className="flashcard inicial">
                    <span>Pergunta {indice}</span>
                    <ion-icon name="play-outline" onClick={() => setStatus("perguntando")}></ion-icon>
                </article>
    }

    return flashcard;

}

export default Flashcard;