import React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
// import { DataPickerComponent } from "@syncfusion/ej2-react-calendars";
import { scheduleData } from "../data/dummy";
import { Header } from "../components";
import { select } from "@syncfusion/ej2/base";
import { selectedData } from "@syncfusion/ej2/filemanager";

const Calendar = () => {
  return (
    <div className="m-2 mt-24 bg-white p-2 md:p-10 rounded-3xl">
      <Header category="Page" title="Calendar" />
      <ScheduleComponent height='650px' eventSettings={{dataSource:scheduleData}} selectedDate={new Date(2021,0,10)}>
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
