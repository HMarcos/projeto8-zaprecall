function Progresso(props) {
    const { numeroDeFlashcards, flashcardsRespondidos, icones } = props.progresso;

    return (
        <section className="progresso">
            <span className="concluidos">{flashcardsRespondidos}/{numeroDeFlashcards} CONCLUÍDOS</span>

            <div className="lista-icones">
                {icones.map((icone ,index) => <ion-icon name={icone} key={index}> </ion-icon>)}
            </div>
        </section>
    )
}

export default Progresso;