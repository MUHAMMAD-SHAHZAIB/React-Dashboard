import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import { Header } from "../../components";

import {
  areaCustomSeries,
  areaPrimaryYAxis,
  areaPrimaryXAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";

const Area = () => {
  const {currentMode}  = useStateContext();

  return (
    <div className="m-2 mt-24 bg-white p-2 md:p-10 rounded-3xl">
      <Header category="Area" title="Inflation in Percentage" />
      <ChartComponent
        id="area-chart"
        // height="420px"
        primaryYAxis={areaPrimaryYAxis}
        primaryXAxis={areaPrimaryXAxis}
        // chartArea={{ border: { width: 0 } }}
        // tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E":"#FFF"}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend ]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
