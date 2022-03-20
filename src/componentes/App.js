// Importando o CSS 
import "../css/reset.css"
import "../css/estilos.css"

import { useState } from "react";


import TelaBoasVindas from "./TelaBoasVindas";

function App() {
    const [tela, setTela] = useState("tela-boas-vindas");

    let telaRenderizada = null;

    if (tela == "tela-boas-vindas") {
        telaRenderizada = <TelaBoasVindas iniciarRecall={() => {setTela("tela-recalls")}} />
    }
    else {
        telaRenderizada = <></>
    }

    console.log(tela);

    return (
        telaRenderizada 
    )
}

export default App;