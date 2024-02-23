import DiceIcon from './components/DiceIcon';
import Divider from './components/Divider';
import './App.css'
import { useEffect, useState } from 'react';

interface Advice {
  slip: {
    id: number,
    advice: string
  }
}

function App() {

  const [advice, setAdvice] = useState<Advice>();

  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    await fetch(`https://api.adviceslip.com/advice`)
        .then((response => response.json()))
        .then(data => {
          setAdvice(data)
        });
  }

  return (
    <div className="container">
      <div className="card-componnent">
        <p className="advice-id">ADVICE #{advice?.slip.id}</p>
        <p className="advice-content">"{advice?.slip.advice}"</p>
        <Divider />
        <a onClick = {() => getData()} className="btn-advice"><DiceIcon/></a>
      </div>
    </div>
  );
}

export default App
