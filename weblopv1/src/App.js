import React,{useState, useEffect} from 'react'

function App() {
  return (
    <div>"Hello world=))"</div>
  )

  const [data,setData] = useState([{}])

  useEffect(()=>{
    fetch('/api').then(
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
      {(typeof data.message === undefined)?(
        <p>loading...</p>
      )  :(
        <p>{data.message}</p>
      )
    }
    </div>

  );
}

export default App;
