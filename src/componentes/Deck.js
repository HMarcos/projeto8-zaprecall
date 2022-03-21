import Flashcard from "./Flashcard";


function Deck(props){
    const {deck, atualizarProgresso} = props;

    return (
        <>
        {deck.map((flashcard, index) => <Flashcard flashcard={flashcard} indice = {index} atualizarProgresso={atualizarProgresso} key = {index} />)}
        </>
    )

}

export default Deck;