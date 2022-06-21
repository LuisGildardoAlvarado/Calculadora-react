import './App.css';
import TD from './images/TD.jpg';
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState} from 'react';
import { evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    }
    else{
      alert("ingrese valores para calcular")
    }
    
  };

  return (
    <div className="App">
      <div className="TD-logo-container">
        <img
        src={TD}
        className="TD-logo"
        alt="Logo de TribalDevs" />
      </div>

      <div className="calculator-container">
        <Screen input={input}/>
        <div className="row">
          <Button controlClic={addInput}>1</Button>
          <Button controlClic={addInput}>2</Button>
          <Button controlClic={addInput}>3</Button>
          <Button controlClic={addInput}>+</Button>
        </div>
        <div className="row">
          <Button controlClic={addInput}>4</Button>
          <Button controlClic={addInput}>5</Button>
          <Button controlClic={addInput}>6</Button>
          <Button controlClic={addInput}>-</Button>
        </div>
        <div className="row">
          <Button controlClic={addInput}>7</Button>    
          <Button controlClic={addInput}>8</Button>
          <Button controlClic={addInput}>9</Button>
          <Button controlClic={addInput}>*</Button>
        </div>
        <div className="row">
          <Button controlClic={calculateResult}>=</Button>
          <Button controlClic={addInput}>0</Button>
          <Button controlClic={addInput}>.</Button>
          <Button controlClic={addInput}>/</Button>
        </div>
        <div className="row">
          <ButtonClear controlClear={() => setInput('')}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
