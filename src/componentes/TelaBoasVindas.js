import LogoZapRecall from "../assets/logo.png"

function TelaBoasVindas(props) {
    
    const {iniciarRecall} = props;
    
    return (
        <div className="container">
            <section className="tela-boas-vindas">
                <img src={LogoZapRecall} alt="logo-zaprecall" />
                <h1>ZapRecall</h1>
                <button onClick={iniciarRecall}>Iniciar Recall!</button>
            </section>
        </div>
    )
}

export default TelaBoasVindas;