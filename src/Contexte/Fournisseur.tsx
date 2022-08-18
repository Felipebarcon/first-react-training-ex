import { useState } from "react";
import Intermediaire from "./Intermediaire";
import LeContexte from "./LeContexte";

function Fournisseur() {
    const [personne, setPersonne] = useState(["Paul", 40]);
    return (
        <>
            Nom:{" "}
            <input onChange={(e) => setPersonne([e.target.value, personne[1]])} />
            <br />

            Age:{" "}
            <input
                type="number"
                onChange={(e) => setPersonne([personne[0], e.target.value])}
            />
            <br />

            Fournisseur: {personne[0]}, age = {personne[1]}
            <br />
            <LeContexte.Provider value={personne}>
                <Intermediaire />
            </LeContexte.Provider>
        </>
    );
}

export default Fournisseur;
