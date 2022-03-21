import Flashcard from "./Flashcard";


function Deck(props){
    const {deck} = props;

    return (
        <>
        {deck.map((flashcard, index) => <Flashcard flashcard={flashcard} indice = {index} key = {index} />)}
        </>
    )

}

export default Deck;