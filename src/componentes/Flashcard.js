import { useState } from "react";

import Setinha from "../assets/setinha.png";

function Flashcard(props) {
    const { pergunta, resposta } = props.flashcard;
    const indice = props.indice + 1;
    const atualizarProgresso = props.atualizarProgresso;

    const [status, setStatus] = useState({ fase: "inicial", icone: "", resposta: "" });

    function processarResposta(escolha) {
        const [iconeResposta, respostaEscolhida] = escolha;
        setStatus({ ...status, fase: "respondido", icone: iconeResposta, resposta: respostaEscolhida });
        atualizarProgresso({ icone: iconeResposta, resposta: respostaEscolhida });
    }


    let flashcard = null;

    switch (status.fase) {
        case "perguntando":
            flashcard =
                <article className=" flashcard perguntando">
                    <p>{pergunta}</p>
                    <img src={Setinha} alt="revelar-resposta" onClick={() => setStatus({ ...status, fase: "respondendo" })} />
                </article>
            break;

        case "respondendo":
            flashcard =
                <article className=" flashcard respondendo">
                    <p>{resposta}</p>
                    <div className="botoes-respostas">
                        <button className="nao-lembrei" onClick={() => { processarResposta(["close-circle", "nao-lembrei"]) }}>Não <br /> lembrei</button>
                        
                        <button className="quase-nao-lembrei" onClick={() => { processarResposta(["help-circle", "quase-nao-lembrei"]) }}> Quase não lembrei</button>
                        
                        <button className="zap" onClick={() => { processarResposta(["checkmark-circle", "zap"]) }}> Zap!</button>
                    </div>
                </article>
            break;

        case "respondido":
            flashcard =
                <article className="flashcard respondido">
                    <span className={status.resposta}>Pergunta {indice}</span>
                    <ion-icon name={status.icone}></ion-icon>
                </article>
            break;

        default: // Estado inicial
            flashcard =
                <article className="flashcard inicial">
                    <span>Pergunta {indice}</span>
                    <ion-icon name="play-outline" onClick={() => setStatus({ ...status, fase: "perguntando" })}></ion-icon>
                </article>
    }

    return flashcard;

}

export default Flashcard;