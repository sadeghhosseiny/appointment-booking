import { Routes, Route, BrowserRouter } from "react-router-dom";
import Events from "./Components/Events";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import AddBrief from "./pages/addBrief";
import Briefs from "./pages/brief";

function App() {
  return (
    <div className="App bg-gray-100 lg:h-screen lg:overflow-auto">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-full text-white">
          <Navbar />
        </div>
        <div className="flex justify-center w-full text-gray-800">
          <div className="lg:flex hidden w-2/12">
            <Sidebar />
          </div>
          <div className="lg:w-10/12 w-full lg:p-0 p-3">
            {/* <BrowserRouter> */}
            <Routes>
              <Route path="/" element={<Events />} />
              <Route path="/brief" element={<Briefs />} />
              {/* <div className="lg:w-10/12 w-full lg:p-0 p-3"> */}
              {/* <Events /> */}
              {/* </div> */}
              <Route path="/addbrief" element={<AddBrief />} />
            </Routes>
            {/* </BrowserRouter> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
