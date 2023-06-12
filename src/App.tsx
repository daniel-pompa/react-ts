import Counter from './components/Counter';
import User from './components/User';
import ParentTimer from './components/ParentTimer';
import ReducerCounter from './components/ReducerCounter';
import Form from './components/Form';

function App() {
  return (
    <div>
      <h1 className='text-uppercase text-center'>React TypeScript</h1>
      <hr />
      <Counter />
      <hr />
      <User />
      <hr />
      <ParentTimer />
      <hr />
      <ReducerCounter />
      <hr />
      <Form />
      <hr />
    </div>
  );
}

export default App;
