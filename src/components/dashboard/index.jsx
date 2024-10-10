import React from "react";
import Climate from "../climate";
import Lights from "../Lights";
import Blinds from "../blinds";
import Energy from "../energy";


export const Dashboard = ({ data }) => {
  return (
    <main className="dashboard">
      <Lights lights={data.lights} />
      <Climate temperature = {data.climate.temperature} humidity = {data.climate.humidity} />
      <Blinds state = {data.blinds} />
      <Energy electricity = {data.energyConsumption.electricity} water = {data.energyConsumption.water} />
    </main>
  );
};
