import { useMemo, useState } from 'react';
import Liste from './Liste';

const BoutonMemo = () => {
    const [compteur, setCompteur] = useState(0);
    const [listeElements, setListeElements] = useState([] as string[]);
    const groscalcul = useMemo(() => getGrosCalcul(compteur), [compteur]);

    const addElement = () => {
        setListeElements([...listeElements, 'nouveau']);
    };

    return (
        <>
            <Liste elements={listeElements} onAdd={addElement}></Liste>
            Compteur : {compteur}
            <br />
            <button onClick={() => setCompteur(compteur + 1)}>+</button>
            <br />
            Calcul: {groscalcul}
            <br />
        </>
    );
};

export default BoutonMemo;

function getGrosCalcul(compteur: number) {
    for (let index = 0; index < 100000000; index++) {
        compteur += 1;
    }
    return compteur;
}
