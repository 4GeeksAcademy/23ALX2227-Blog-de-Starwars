import React from "react";

import Characters from "./Characters.jsx";
import Vehicles from "./Vehicles.jsx";
import Icons from "./Icons.jsx";

export const Home = () => {
  return (
    <div>
      <Characters />
      <Icons />
      <Vehicles />
    </div>
  );
};