
import { useSelector } from 'react-redux';
import CounterButton from './components/counterButton';
import ShowReduxStoreİnfo from './ShowReduxStoreİnfo';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
function App() {
const value=useSelector(store=>store.counter.value)
  return (
    <>
     <h2>App</h2>
     <hr />
     <AddTodo/>
     <hr />
<Todos/>
     <hr />
     <h2>Sayaç:{value}</h2>
<CounterButton/>
<ShowReduxStoreİnfo/>
    </>
  )
}

export default App
