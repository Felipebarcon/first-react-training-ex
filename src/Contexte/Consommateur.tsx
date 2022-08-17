import { useContext } from 'react';
import LeContexte from './LeContexte';

function Consommateur() {
  const personne = useContext(LeContexte);
  return (
    <>
      Consommateur: {personne[0]}, age = {personne[1]}
      <br />
    </>
  );
}

export default Consommateur;
