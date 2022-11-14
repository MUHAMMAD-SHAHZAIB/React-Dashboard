import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Category,
  Legend,

  Tooltip,
  ColumnSeries,
  DataLabel,

} from "@syncfusion/ej2-react-charts";
import { Header } from "../../components";

import {
  barCustomSeries,
  barPrimaryYAxis,
  barPrimaryXAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-2 mt-24 bg-white p-2 md:p-10 rounded-3xl">
      <Header category="Bar" title="Olympic Medal Counts - RIO" />
      <ChartComponent
        id="charts"
    
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#FFF"}
        legendSettings={{ background: 'White' }}
      >
        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel,Category]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
