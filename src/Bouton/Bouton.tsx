import btnstyle from './btnstyle.module.css';
interface BoutonProp {
  texte: string;
  fois?: number;
  onClique: () => void;
}

const Bouton = (props: BoutonProp) => {
  const f = props.fois ?? 1;
  return (
    <button className={btnstyle.border} onClick={props.onClique}>
      {props.texte} {f} fois
    </button>
  );
};

export default Bouton;
