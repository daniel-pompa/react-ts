import { useReducer } from 'react';

const initialState = {
  counter: 0,
};

type ActionType =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset'; payload: number };

const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'decrement':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'reset':
      return {
        ...state,
        counter: action.payload,
      };
    default:
      return state;
  }
};

const ReducerCounter = () => {
  const [{ counter }, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='my-5'>
      <h2>Contador - useReducer</h2>
      <p className='fs-4'>Valor: {counter}</p>

      <div className='mt-4'>
        <button
          onClick={() => dispatch({ type: 'increment' })}
          className='btn btn-outline-primary me-2'
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: 'reset', payload: 0 })}
          className='btn btn-outline-primary me-2'
        >
          Restablecer
        </button>
        <button
          onClick={() => dispatch({ type: 'decrement' })}
          className='btn btn-outline-primary'
        >
          -
        </button>
      </div>
    </div>
  );
};

export default ReducerCounter;
