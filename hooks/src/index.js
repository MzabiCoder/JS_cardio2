import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Hook = (props) => {

    const [count, seCount] = useState(props.count)
    // const increment = () => {
    //     seCount(count + 1)
    // }

    return (
        <div>
         <p>The count is {count}</p>
          <button onClick={()=>seCount(count + 1)}>+1</button>
          <button onClick={()=>seCount(count - 1)}>-1</button>
          <button onClick={()=>seCount(props.count)}>0</button>
        </div>
    )
}
Hook.defaultProps={
    count:0
}
ReactDOM.render( < Hook / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();