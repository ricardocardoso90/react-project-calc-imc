import '../RightSide/styles.css';
import { level } from "../CalcImc";

import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

// const upImage = require('../../assets/up.png') as string;
// const downImage = require('../../assets/down.png') as string;

type Props = {
    item: level;
};

export const GridItem = ({ item }: Props) => {
    return (
        <div className='main' style={{ backgroundColor: item.color }}>
            <div className='gridIcon'>
                <img src={item.icon === 'up' ? upImage : downImage} alt="" width={30} />
            </div>
            <div className='gridTitle'>{item.title}</div>

            {item.yourImc &&
                <div className='yourImc'>Seu IMC é de {item.yourImc} kg/m.</div>
            }

            <div className='gridInfo'>
                {/* <> */}
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                {/* </> */}
            </div>
        </div>
    );
};