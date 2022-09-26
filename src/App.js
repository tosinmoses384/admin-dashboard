import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import moment from "moment";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import { Ecommerce } from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const [taskName, setTaskName] = useState("");
  const [hoursValue, setHoursValue] = useState("");
  const [DateStartValue, setStartDateValue] = useState("");
  const [DateEndValue, setEndDateValue] = useState("");

  const {
    items,
    addToItems,
    save,

    activeMenu,
  } = useStateContext();

  const formatDate = (dateString, dateFormat) => {
    const nullDates = ["0001-01-01T00:00:00Z", "0001-01-01T00:00:00"];
    if (!dateString) return "N/A";
    if (nullDates.includes(dateString)) return "------";
    return moment(dateString).format(dateFormat);
  };

  const CardDateColumnFormatter = (cellContent) => {
    const dateFormat = "MMM DD, YYYY";
    return <span>{formatDate(cellContent, dateFormat)}</span>;
  };

  const createNew = (e) => {
    e.preventDefault();
    setTaskName(e.target.value);
  };

  const enterHour = (e) => {
    e.preventDefault();
    setHoursValue(e.target.value);
  };

  const handleStartChange = (e) => {
    e.preventDefault();
    const dateStart = new Date(e.target.value);
    const isoStart = dateStart.toISOString();
    const startDate = CardDateColumnFormatter(isoStart);
    setStartDateValue(startDate);
  };

  const handleEndChange = (e) => {
    e.preventDefault();
    const dateEnd = new Date(e.target.value);
    const isoEnd = dateEnd.toISOString();
    const endDate = CardDateColumnFormatter(isoEnd);
    setEndDateValue(endDate);
  };

  const saveToLocalStorage = () => {
    addToItems({
      StartDate: DateStartValue,
      EndDate: DateEndValue,
      NameOfTask: taskName,
      Hours: hoursValue,
      Progress: "60% complete",
    });
  };

  return (
    <div>
      <Router>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* SIDE BAR */}
          {activeMenu ? (
            <div
              style={{
                background: "#FBFAFF",
              }}
              className="w-36 fixed sidebar dark:bg-secondary-dark-bg"
            >
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          {/* NAVIGATION MENU */}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-36" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            {/* ROUTING CONTAINER */}
            <div  className="flex">
              <div>
                <Routes>
                  {/* DASHBOARD */}

                  <Route path="/" element={<Ecommerce />} />
                  <Route path="/ecommerce" element={<Ecommerce />} />
                </Routes>
              </div>

              <div style={{  width: "30rem" }}>
                <div className="flex-col p-3">
                  {/* TODAY SCHEDULE */}
                  <div className="flex justify-between mb-4">
                    <div className="pt-2">
                      <h2
                        className=""
                        style={{
                          fontStyle: "normal",
                          fontWeight: "700",
                          fontSize: "1rem",
                          lineHeight: "1rem",

                          color: "#005555",
                        }}
                      >
                        Today's Schedule
                      </h2>
                    </div>
                    <div
                      style={{
                        background: "#F4F4F4",
                      }}
                      className="flex justify-between p-3 px-6 rounded-full bg-strongCyan duration-200 hover:opacity-80"
                    >
                      <img src="./svg/btn1.svg" alt="" className="mr-3" />
                      <img src="./svg/btn2.svg" alt="" className="" />
                    </div>
                  </div>

                  {/* New Task */}
                  <div className="flex justify-between mb-4">
                    <div className="pt-2">
                      <h2
                        className=""
                        style={{
                          fontStyle: "normal",
                          fontWeight: "700",
                          fontSize: "1rem",
                          lineHeight: "1rem",

                          color: "#005555",
                        }}
                      >
                        New Task
                      </h2>
                    </div>
                    <img src="./svg/3dot.svg" alt="" className="" />
                  </div>

                  {/* New Title */}
                  <div className="mb-4">
                    <div className="pt-2">
                      <h2
                        className=""
                        style={{
                          fontStyle: "normal",
                          fontWeight: "500",

                          fontSize: "11px",
                          lineHeight: "14px",

                          color: "#768396",
                        }}
                      >
                        Task Title
                      </h2>
                    </div>
                  </div>

                  {/* Create New */}

                  <div className="mb-4">
                    <input
                      style={{
                        background: "#E8EDF1",
                        borderRadius: "7px",
                      }}
                      type="text"
                      placeholder="Create new"
                      className="w-full p-2 px-4 text-center text-dark border border-zinc-600 placeholder:text-xs placeheolder:text-center md:text-left placeholder:md:text-left focus:outline-none"
                      onChange={createNew}
                    />
                  </div>

                  {/* Emoji */}
                  <div className="flex justify-center items-center mb-4">
                    <img src="./svg/emoji.svg" alt="" className="w-full" />
                  </div>

                  {/* Line */}
                  <div className="flex justify-center items-center">
                    <img src="./svg/line.svg" alt="" className="w-full" />
                  </div>

                  {/* Add Collaborators */}
                  <div className="mb-4">
                    <div className="pt-2">
                      <h2
                        className=""
                        style={{
                          fontStyle: "normal",
                          fontWeight: "500",

                          fontSize: "11px",
                          lineHeight: "14px",

                          color: "#768396",
                        }}
                      >
                        Add Collaborators
                      </h2>
                    </div>
                  </div>

                  <div className="flex justify-around items-center mb-4">
                    <img src="./svg/angela.svg" alt="" className="" />
                    <img src="./svg/chris.svg" alt="" className="" />
                    <img src="./svg/plus.svg" alt="" className="" />
                    <img src="./svg/greater.svg" alt="" className="" />
                  </div>

                  {/* Line */}
                  <div className="flex justify-center items-center">
                    <img src="./svg/line.svg" alt="" className="w-full" />
                  </div>

                  {/* Time To Complete */}
                  <div className="mb-4">
                    <div className="pt-2">
                      <h2
                        className=""
                        style={{
                          fontStyle: "normal",
                          fontWeight: "500",

                          fontSize: "11px",
                          lineHeight: "14px",

                          color: "#768396",
                        }}
                      >
                        Time to complete
                      </h2>
                    </div>
                  </div>

                  {/* Start Date */}
                  <div className="mb-4">
                    <input
                      style={{
                        background: "#E8EDF1",
                        borderRadius: "7px",
                      }}
                      type="date"
                      placeholder="Start Date"
                      className="w-full p-2 px-4 text-center text-white border border-zinc-600 placeholder:text-xs placeheolder:text-center md:text-left placeholder:md:text-left focus:outline-none"
                      onChange={handleStartChange}
                    />
                  </div>

                  {/* End Date */}
                  <div className="mb-4">
                    <input
                      style={{
                        background: "#E8EDF1",
                        borderRadius: "7px",
                      }}
                      type="date"
                      placeholder="End Date"
                      className="w-full p-2 px-4 text-center text-white border border-zinc-600 placeholder:text-xs placeheolder:text-center md:text-left placeholder:md:text-left focus:outline-none"
                      onChange={handleEndChange}
                    />
                  </div>

                  {/* Line */}
                  <div className="flex justify-center items-center">
                    <img src="./svg/line.svg" alt="" className="w-full" />
                  </div>

                  {/* Hours Budgeted */}
                  <div className="mb-4">
                    <div className="pt-2">
                      <h2
                        className=""
                        style={{
                          fontStyle: "normal",
                          fontWeight: "500",

                          fontSize: "11px",
                          lineHeight: "14px",

                          color: "#768396",
                        }}
                      >
                        Hours Budgeted
                      </h2>
                    </div>
                  </div>

                  {/* Start Date */}
                  <div className="mb-4">
                    <input
                      style={{
                        background: "#E8EDF1",
                        borderRadius: "7px",
                      }}
                      type="text"
                      placeholder="Enter Hours"
                      className="w-full p-2 px-4 text-center text-dark border border-zinc-600 placeholder:text-xs placeheolder:text-center md:text-left placeholder:md:text-left focus:outline-none"
                      onChange={enterHour}
                    />
                  </div>

                  {/* Save */}
                  <div className="mb-4 flex justify-end">
                    <button
                      style={{
                        background: "#E3E8EE",
                        boxShadow: "0px 8px 20px rgba(227, 232, 238, 0.24)",
                        borderRadius: "7px",
                      }}
                      className="px-5 pt-2 pb-2"
                      onClick={saveToLocalStorage}
                    >
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "14px",
                          lineHeight: "18px",
                          textAlign: "center",
                          color: "#FFFFFF",
                        }}
                      >
                        Save
                      </span>
                    </button>
                  </div>

                  {/* Line */}
                  <div className="flex justify-center items-center">
                    <img src="./svg/line.svg" alt="" className="w-full" />
                  </div>

                  {/* Messages */}
                  <div className="flex justify-between mb-4">
                    <div className="pt-2">
                      <h2
                        className=""
                        style={{
                          fontStyle: "normal",
                          fontWeight: "700",
                          fontSize: "1rem",
                          lineHeight: "1rem",

                          color: "#005555",
                        }}
                      >
                        Messages
                      </h2>
                    </div>
                  </div>

                  {/* people*/}
                  <div className="flex justify-start items-center  w-full">
                    <div className="mb-8">
                      <img
                        className=" rounded-full mr-2"
                        src="./svg/webber.svg"
                        alt=""
                      />
                    </div>
                    <div
                      
                      className="flex flex-col mb-4"
                    >
                      <h1
                        className=""
                        style={{
                          fontStyle: "normal",
                          fontWeight: "700",
                          fontSize: "14px",
                          lineHeight: "18px",
                          color: "#005555",
                        }}
                      >
                        Chris Webber
                      </h1>
                      <p
                        style={{
                          fontStyle: "normal",
                          fontWeight: "500",

                          fontSize: "11px",
                          lineHeight: "14px",
                          color: "#768396",
                        }}
                      >
                        Do you need that design?
                      </p>
                    </div>
                  </div>

                  {/* people*/}
                  <div className="flex justify-start items-center  w-full">
                    <div className="mb-8">
                      <img
                        className=" rounded-full mr-2"
                        src="./svg/webber.svg"
                        alt=""
                      />
                    </div>
                    <div
                      
                      className="flex flex-col mb-4"
                    >
                      <h1
                        className=""
                        style={{
                          fontStyle: "normal",
                          fontWeight: "700",
                          fontSize: "14px",
                          lineHeight: "18px",
                          color: "#005555",
                        }}
                      >
                        Kelvin Durant
                      </h1>
                      <p
                        style={{
                          fontStyle: "normal",
                          fontWeight: "500",

                          fontSize: "11px",
                          lineHeight: "14px",
                          color: "#768396",
                        }}
                      >
                        Do you need that design?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
