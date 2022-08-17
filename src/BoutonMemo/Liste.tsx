import { memo } from 'react';

interface IListeProps {
  elements: string[];
  onAdd: () => void;
}

const Liste = (props: IListeProps) => {
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

export default memo(Liste);
