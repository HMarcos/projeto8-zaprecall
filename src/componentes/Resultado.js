import Party from "../assets/party.png"
import Sad from "../assets/sad.png"

function Resultado(props) {
    const { flashcardsRespondidos, numeroDeFlashcards, respostas, icones } = props.progresso;

    let titulo = "";
    let mensagem = "";
    let emoji = "";

    if (respostas.includes("nao-lembrei")) {
        titulo = "Putz..."
        mensagem = `Ainda faltaram alguns...
        Mas não desanime`;
        emoji = Sad;
    }
    else {
        titulo = "Parabéns!"
        mensagem = `Você não esqueceu de
        nenhum flashcard!`;
        emoji = Party;
    }

    return (
        <section className="resultado">
            <div className="resultado__titulo">
                <img src={emoji} alt={titulo} />
                <h3>{titulo}</h3>
            </div>

            <span className="resultado__mensagem">{mensagem}</span>

            <span className="concluidos">{flashcardsRespondidos}/{numeroDeFlashcards} CONCLUÍDOS</span>

            <div className="lista-icones">
                {icones.map((icone, index) => <ion-icon name={icone} key={index}> </ion-icon>)}
            </div>
        </section>
    )

}

export default Resultado;