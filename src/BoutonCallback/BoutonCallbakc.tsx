import { useCallback, useState } from 'react';

function BoutonSimple(props: any) {
  return <button onClick={props.onClick}>{props.nom}</button>;
}

export default function BoutonCallback() {
  const [compteur, setCompteur] = useState(0);
  const [actif, setActif] = useState(true);

  const ajoute = useCallback(() => setCompteur(compteur + 1), [compteur]);

  const toogle = useCallback(() => setActif(!actif), [actif]);

  return (
    <>
      {actif && (
        <>
          <BoutonSimple onClick={ajoute} nom="increment" />; Compteur:{' '}
          {compteur}
        </>
      )}
      <BoutonSimple onClick={toogle} nom={actif ? 'Hide' : 'Show'} />;
    </>
  );
}
