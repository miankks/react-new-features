import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


const App = (props) => {
  // const array = useState(10)
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState('');

  const increment = () => {
    setCount(count +1);
  }
  return (
    <div>
      <p>The current {text || 'count'} is {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={() => setCount(props.count)}>Reset</button>
      <button onClick={() => setCount(count -1)}>-1</button>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  )
}


App.defaultProps = {
  count: 0
}
ReactDOM.render(
  <React.StrictMode>
    <App count={2}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// const App = (props) => {
//   // const array = useState(10)
//   // not recommended to store all state on a single object
//   const [state, setState] = useState({
//     count: props.count,
//     text: ''
//   });

//   return (
//     <div>
//       <p>The current {state.text || 'count'} is {state.count}</p>
//       <button onClick={() => setState({...state, count: state.count + 1})}>+1</button>
//       <button onClick={() => setState({...state, count: props.count})}>Reset</button>
//       <button onClick={() => setState({...state, count: state.count -1})}>-1</button>
//       <input value={state.text} onChange={(e) => setState({...state, text: e.target.value})}/>
//     </div>
//   )
// }