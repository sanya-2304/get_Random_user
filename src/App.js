import './App.css';
import React, {useState, useEffect} from 'react';
import { getRandomUser } from './api';
import { Card } from './api/card';
function App() {
  const [data, setData]=useState(null);
  useEffect(()=>{
    getRandomUser().then((user)=>setData(user.results[0]))
  },[])
  // console.log(data);
  const Refresh=()=>{
    getRandomUser().then((user)=>setData(user.results[0]))
  }
  return (
    <div className="App">
  {data && < Card data={data}/>}
  <button onClick={Refresh}>Refresh User</button>
    </div>
  );
}

export default App;
