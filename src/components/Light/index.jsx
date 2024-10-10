import React, { useState } from "react";
import lightOn from "../../../html-vzor/images/light-on.svg";
import lightOff from "../../../html-vzor/images/light-off.svg";


const Light = ({ name, state }) => {
    const [enabled, setEnabled] = useState(state);
    const handleClick = () => {
      if (enabled === "off") {
        setEnabled("on");
      } else {
        setEnabled("off");
      }
    };
    return (
      <div onClick={handleClick} className="light">
        <div className="light__icon">
          <img src={enabled === "on" ? lightOn : lightOff} alt="lightOn" />
        </div>
        <div className="light__name">{name}</div>
      </div>
    );
  };

  export default Light