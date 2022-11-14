import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Sort,
  Edit,
  Inject,
  Filter,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 bg-white p-2 md:p-10 rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        // id="gridcomp"
        dataSource={customersData}
        allowPaging
        allowSorting
        allowSelection
        toolbar={["Delete"]}
        editSettings={{allowAdding:true, allowDeleting:true,allowEditing:true}}
        width="auto"

        // editSettings={editing}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Edit, Toolbar,Filter,Sort,Selection]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
