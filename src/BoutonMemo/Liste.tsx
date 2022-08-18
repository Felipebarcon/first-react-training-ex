import { memo } from 'react';

interface IListeProps {
  elements: string[];
  onAdd: () => void;
}

const Liste = (props: IListeProps) => {
    console.log('Liste crée');
  return (
    <>
      Nombre éléments : {props.elements.length} <br />
      {props.elements.map((element, index) => (
        <p key={element + index}>{element}</p>
      ))}
      <button onClick={props.onAdd}>Ajoute</button>
    </>
  );
};

export default memo(Liste,
    // Si les éléments sont identiques, on ne re-rend pas la liste
    /*(prevProps, nextProps) => prevProps.elements.toString() === nextProps.elements.toString()*/
  (prevProps, nextProps) => prevProps.elements === nextProps.elements);


