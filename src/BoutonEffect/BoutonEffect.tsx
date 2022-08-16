import { useEffect, useState } from 'react';

const BoutonEffect = () => {
  const [compteur, setCompteur] = useState(0);
  const [compteur2, setCompteur2] = useState(0);
  const [resultat, setResultat] = useState(0);

  useEffect(() => {
    // useEffect permet de gérer les interactions avec le DOM
    console.log('modif: ' + compteur + compteur2);
    setResultat(compteur * 2);
  }, [compteur, compteur2]);

  return (
    <>
      <button onClick={() => setCompteur(compteur + 1)}>+</button>;
      <button onClick={() => setCompteur2(compteur2 + 1)}>+</button>; Compteur :{' '}
      {compteur}, Résultat: {resultat}, Compteur2 : {compteur2}
    </>
  );
};

export default BoutonEffect;
