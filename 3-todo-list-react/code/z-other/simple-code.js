import './App.css';
import { useState } from 'react';

function Person(props) {
  return (
    <>
      <h2>name: {props.name}</h2>
      <p>Last name: {props.lastName}</p>
      <p>age: {props.age}</p>
    </>
  )
}
function App() {
  const name = 'ali';
  const isShowName = true;

  const [count, setCount] = useState(0);
  return (
    <div className="App-header">
      {/* <p>my name is {name}</p>
      <p>name was exit : {isShowName ? 'true' : 'false'}</p>
      {isShowName ? (
        <>
          <h3>nams was exit</h3>
          <p>{name}</p>
        </>
      )
        :
        (<h3>nams was't exit</h3>)
      } */}

      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <p>count: <span>{count}</span></p>
      </div>


      <Person
        name='ali'
        lastName='rad'
        age={12 + 6}
      />
      {/* <Person
        name='hasan'
        lastName='mehri'
        age="23"
      /> */}
    </div>
  );
}

export default App;
