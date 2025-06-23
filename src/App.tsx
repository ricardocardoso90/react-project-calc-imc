import './App.css';
import './components/left-side/styles.css';
import './components/right-side/styles.css';

import { useState } from 'react';
import { calcImc } from './components/calc-imc';
import { levels, level } from './components/calc-imc';
import { GridItem } from './components/grid-item';

function App() {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<level | null>(null);

  const imgPowered = require("./assets/powered.png") as string;
  const leftArrow = require('./assets/leftarrow.png') as string;

  const handleHeightField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeightField(parseFloat(e.target.value));
  };

  const handleWeightField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeightField(parseFloat(e.target.value))
  };

  const handleCalcButton = () => {
    if (heightField && weightField) {
      setToShow(calcImc(heightField, weightField));
    } else {
      alert('Algo de errado não está certo!!');
    }
  };

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  };

  return (
    <div className='box'>
      <div className='img-box'>
        <img src={imgPowered} alt="" width={90} />
      </div>
      <div className='container'>

        <div className='left-side'>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde para calcular o peso ideal para cada pessoa.</p>

          <input className='height'
            type="number"
            value={heightField > 0 ? heightField : ''}
            onChange={handleHeightField}
            placeholder='Digite a sua altura. Ex: 1.5 (em métros).'
            disabled={toShow ? true : false}
          />

          <input className='weight'
            type="number"
            value={weightField > 0 ? weightField : ''}
            onChange={handleWeightField}
            placeholder='Digite o seu peso. Ex: 75.3 (em kg).'
            disabled={toShow ? true : false}
          />

          <button onClick={handleCalcButton}
            disabled={toShow ? true : false}
          >Calcular</button>
        </div>


        <div className='right-side'>
          {!toShow &&
            <div className='grid'>
              {levels.map((item, key) => {
                return (
                  <GridItem key={key} item={item} />
                )
              })}
            </div>
          }

          {toShow &&
            <div className='rightBig'>
              <div className='rightArrow'>
                <img src={leftArrow} alt="" width={25} onClick={handleBackButton} />
              </div>
              <GridItem item={toShow} />
            </div>
          }
        </div>
      </div>
    </div>
  )
};

export default App;