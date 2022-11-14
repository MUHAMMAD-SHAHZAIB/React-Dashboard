import React from 'react';
import { Header,LineChart } from "../../components";

const Line = () => {
  return (
    <div className="m-2 mt-24 bg-white p-2 md:p-10 rounded-3xl">
      <Header category="Chart" title="Inflation Rate" />
     <div className="w-full">
      <LineChart />
     </div>
    </div>
  );
};
export default Line