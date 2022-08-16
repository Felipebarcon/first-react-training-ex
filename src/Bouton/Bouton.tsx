import './Bouton.css';

interface BoutonProp {
  texte: string;
  fois: number;
}

const Bouton = (props: BoutonProp) => {
  return (
    <button>
      {props.texte} {props.fois} fois
    </button>
  );
};

export default Bouton;
