import { useContext } from "react";
import Consommateur from "./Consommateur";
import LeContexte from "./LeContexte";

function Intermediaire() {
  const personne = useContext(LeContexte);
  return (
    <>
      Intermediaire: {personne[0]}, age = {personne[1]} <br />
      <Consommateur />
    </>
  );
}

export default Intermediaire;
