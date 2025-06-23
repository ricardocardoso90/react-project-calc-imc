import { level } from "../calc-imc";
import "../../styles/right-side/styles.css";

import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

type Props = {
  item: level;
};

export const GridItem = ({ item }: Props) => {
  return (
    <div className="main" style={{ backgroundColor: item.color }}>
      <div className="gridIcon">
        <img src={item.icon === "up" ? upImage : downImage} alt="" width={30} />
      </div>
      <div className="gridTitle">{item.title}</div>

      {item.yourImc && (
        <div className="yourImc">Seu IMC é de {item.yourImc} kg/m.</div>
      )}

      <div className="gridInfo">
        {/* <> */}
        IMC está entre <strong>{item.imc[0]}</strong> e{" "}
        <strong>{item.imc[1]}</strong>
        {/* </> */}
      </div>
    </div>
  );
};
