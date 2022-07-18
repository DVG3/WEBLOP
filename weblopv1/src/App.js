import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react'
function App() {
  const [data,setData] = useState([{}])

  useEffect(()=>{
    fetch('/easteregg').then(
      res => res.json()
    ).then(
      data => {
        setData(data);
        console.log(data);
      }
    )
  }
  )
  console.log(data.easteregg)
  return (
    <div>
      {(typeof data.easteregg === undefined)?(
        <p>loading...</p>
      )  :(
        <p>data.easteregg</p>
      )
    }
    </div>

  );
}

export default App;
