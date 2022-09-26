import React, { useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { contextMenuItems, ordersGrid } from "../data/dummy";

import { Header } from "../components";

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Ecommerce = ({ history }) => {
  const [newState, setNewState] = useState([]);
  const { currentColor, currentMode, items, getItem } = useStateContext();
  const editing = { allowDeleting: true, allowEditing: true };

  const ordersData = [
    {
      StartDate: "Jan 1, 2022",
      EndDate: "Jan 31, 2022",
      NameOfTask: "User journey of the project",
      Hours: "80",
      Progress: "60% complete",
    },
    {
      StartDate: "Feb 1, 2022",
      EndDate: "Feb 28, 2022",
      NameOfTask: "Wireframing the project",
      Hours: "80",
      Progress: "60% complete",
    },
    {
      StartDate: "March 1, 2022",
      EndDate: "March 31, 2022",
      NameOfTask: "User interface design",
      Hours: "80",
      Progress: "60% complete",
    },
  ];

  return (
    <div>
      <div
        style={{
          width: "78rem",
        }}
        className="flex flex-wrap lg:flex-nowrap justify-center "
      >
        <div className="flex m-3 flex-wrap justify-center items-center gap-5">
          <img
            style={{
              width: "274",
              height: "173",
            }}
            src="./svg/chart1.svg"
            alt="user-profile"
            className=""
          />

          <img
            style={{
              width: "274",
              height: "173",
            }}
            src="./svg/chart2.svg"
            alt="user-profile"
            className=""
          />

          <img
            style={{
              width: "274",
              height: "173",
            }}
            src="./svg/chart3.svg"
            alt="user-profile"
            className=""
          />
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <img
          style={{
            width: "870",
            height: "370",
          }}
          src="./svg/chart4.svg"
          alt="user-profile"
          className=""
        />
      </div>

      {items !== undefined && (
        <div
          style={{
            maxWidth: "75rem",
          }}
          className="bg-white rounded-3xl ml-6 mt-4"
        >
          <Header category="" title="Task" />
          <GridComponent
            id="gridcomp"
            dataSource={items === undefined ? newState : items}
            allowPaging
            allowSorting
            allowExcelExport
            allowPdfExport
            contextMenuItems={contextMenuItems}
            editSettings={editing}
          >
            <ColumnsDirective>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              {ordersGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject
              services={[
                Resize,
                Sort,
                ContextMenu,
                Filter,
                Page,
                ExcelExport,
                Edit,
                PdfExport,
              ]}
            />
          </GridComponent>
        </div>
      )}
    </div>
  );
};

export default Ecommerce;
