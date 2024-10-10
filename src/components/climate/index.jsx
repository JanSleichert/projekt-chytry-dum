import React, { useState } from "react";
import temp from "../../../html-vzor/images/temp.svg";


const Climate = ({temperature, humidity}) => {
    const [tmp, setTmp] = useState(temperature);
    

    return (
    <div className="climate">
				<div className="climate__icon">
                <img src={temp} alt="temp" />
				</div>
				<div className="climate__content">
					<div className="climate__temperature">{tmp}&deg;C</div>
					<div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
				</div>
				<div className="climate__controls">
					<button onClick={()=> setTmp(tmp+1)} className="button">+</button>
					<button onClick={()=> setTmp(tmp-1)} className="button">-</button>
				</div>
			</div>
            
)};

export default Climate