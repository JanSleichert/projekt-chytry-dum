import React, { useState } from "react";
import blindsOpen from "../../../html-vzor/images/blinds-open.svg";
import blindsClosed from "../../../html-vzor/images/blinds-closed.svg";


const Blinds = ({state}) => {
    
    const [enabled, setEnabled] = useState(state);
    const buttonActive = 'button button--active'
    const buttonInactive = 'button'


    return(
        <div className="blinds">
				<div className="blinds__icon">
                <img src={enabled === "closed" ? blindsClosed:blindsOpen} alt="blinds" />
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
					<button onClick={() => setEnabled("open")} className={enabled === "open" ? buttonInactive:buttonActive}>Otevřeno</button>
					<button onClick={() => setEnabled("closed")} className={enabled === "closed" ? buttonInactive:buttonActive}>Zavřeno</button>
				</div>
			</div>
    )
};

export default Blinds