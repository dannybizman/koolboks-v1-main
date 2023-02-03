import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {Dashboard, Orders, Task, Employees, Stacked, Pyramid, Customers, 
  Pipeline, Area, Bar, Pie, FInancial, ColorPicker, ColorMapping, Editor} from './pages'

  import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";

const App = () => {
  const {activeMenu} = useStateContext();
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "orange", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div
              className="w-72 fixed sidebar 
                                          dark:bg-secondary-dark-bg 
                                bg-white"
            >
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg"><Sidebar /></div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full
                                                 ${
                                                   activeMenu
                                                     ? " md:ml-72 "
                                                     : "flex-2"
                                                 }`}
          >
            <div
              className="fixed md:static 
                                   bg-main-bg dark:bg-main-dark-bg navbar w-full"
            >
              <Navbar />
            
          </div>

          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" 
              element={(<Dashboard />)} />

               <Route path="/dashboard" 
              element={(<Dashboard />)} />

              {/* Koolboks Marketing Tools */}

              <Route path="/orders" element="Orders" />
              <Route path="/employees" element="Employee" />
              <Route path="/customers" element="Customers" />
              
              {/* Koolboks Activity Tools */}
              
              <Route path="/pipeline" element="Pipeline" />
              <Route path="/editor" element="Editor" />
              <Route path="/task" element="Task" />
              <Route path="/color-picker" element="ColorPicker" />

              
              {/* Koolboks Analystics Tools */}

              <Route path="/line" element="Line" />
              <Route path="/area" element="Area" />
              <Route path="/bar" element="Bar" />
              <Route path="/pie" element="Pie" />
              <Route path="/financial" element="Financial" />
              <Route path="/pyramid" element="Pyramid" />
              <Route path="/stacked" element="Stacked" />
              
            </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App; 
