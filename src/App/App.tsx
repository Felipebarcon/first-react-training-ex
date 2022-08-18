import { useRef, useState } from "react";
import "./App.css";
import Bouton from "../Bouton/Bouton";
import ICongrats from "../ICongrats";
import BoutonEffect from "../BoutonEffect/BoutonEffect";
import BoutonReducer from "../BoutonReducer/BoutonReducer";
import BoutonCallback from "../BoutonCallback/BoutonCallbakc";
import BoutonMemo from "../BoutonMemo/BoutonMemo";
import Fournisseur from "../Contexte/Fournisseur";
import LeFormulaire from "../Formulaire/LeFormulaireClasse";

function App() {
    // let text = 'Hello World'; // immuable, c'est une constante bien que let
    // hook state
    const [texte, setTexte] = useState("Salut monde");
    // let congrats = {
    //   text: 'Bravo',
    // };
    // hook state object
    const [congrats, setCongrats] = useState({
        text: "Bravo",
        auteur: "moi",
    } as ICongrats);

    const titlecolor = "alert";
    const subtitleColor = "lightblue";

    function changeCongrats(texte: string) {
        const newCongrats = { ...congrats, auteur: texte };
        setCongrats(newCongrats);
    }

    // hook ref:
    const myInput = useRef<HTMLInputElement>(null);
    return (
        <>
            <h1 className={titlecolor}>{texte}</h1>
            <h2 id="subtitle1" style={{ backgroundColor: subtitleColor }}>
                {congrats.text} by {congrats.auteur}
            </h2>
            <button
                onClick={() => {
                    setTexte("Hello World");
                }}
            >
                Change Title
            </button>
            <button
                onClick={() => {
                    setCongrats({ ...congrats, text: "very good" });
                }}
            >
                Change Congrats
            </button>
            <br />
            <input
                onChange={(event) => {
                    changeCongrats(event.target.value);
                }}
            />
            <br />
            <input type="text" ref={myInput} />
            <br />
            <button
                onClick={() => {
                    changeCongrats(
                        myInput.current ? myInput.current.value : congrats.text
                    );
                }}
            >
                Change Congrats
            </button>
            {/* Custom Button */}
            <Bouton onClique={() => alert(texte)} texte="Bienvenue" />
            <BoutonEffect /> <br />
            <BoutonReducer initialValue={10} />
            <br />
            <BoutonReducer />
            <br />
            <BoutonCallback />
            <br />
            <BoutonMemo />
            <br />
            <Fournisseur />
            <br />
            <LeFormulaire />
        </>
    );
}

export default App;
