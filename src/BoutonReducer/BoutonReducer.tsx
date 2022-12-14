import { useReducer } from 'react';

interface IState {
  compteur: number;
}

interface IAction {
  valeur?: number;
  type: ActionType;
}

enum ActionType {
  incremente,
  decremente,
  reset,
}

interface PropsValue {
  initialValue?: number;
}

const BoutonReducer = (props: PropsValue) => {
  const defaultCompteur = { compteur: props.initialValue ?? 0 };

  function choixAction(state: IState, action: IAction) {
    switch (action.type) {
      case ActionType.incremente:
        return { compteur: state.compteur + (action.valeur ?? 0) };
      case ActionType.decremente:
        return { compteur: state.compteur - (action.valeur ?? 0) };
      case ActionType.reset:
        return defaultCompteur;
      default:
        throw new Error('Action inconnue');
    }
  }

  // Hook reducer
  const [state, dispatch] = useReducer(choixAction, defaultCompteur, () => {
    defaultCompteur.compteur = props.initialValue ?? 0;
    return defaultCompteur;
  });

  return (
    <>
      <button
        onClick={() => dispatch({ type: ActionType.incremente, valeur: 2 })}
      >
        +
      </button>
      <button
        onClick={() => dispatch({ type: ActionType.decremente, valeur: 1 })}
      >
        -
      </button>
      <button onClick={() => dispatch({ type: ActionType.reset })}>
        Reset
      </button>
      <p>Compteur : {state.compteur}</p>
    </>
  );
};

export default BoutonReducer;
// test
