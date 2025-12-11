import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from './components/sideBar/SideBar';
import Fees from "./components/middle/Fees";
import Transactions from "./components/middle/Transaction";
import Results from "./components/middle/Result";
import Courses from "./components/middle/Course";
import Mid from "./components/middle/Mid";
import Payment from "./components/middle/Reciepts/Payment";
function App() {
  return (
    <Router>
      <div className="bg-[#dbdafd] overflow-hidden w-full h-full flex items-center h-screen">
        <div className="m-5 w-[97%] h-[97%] bg-[#f1f0f5] rounded-2xl flex">
          <SideBar />
          <div className="flex-1 p-5">
            <Routes>
              <Route path="/"  element={<Mid />} />
              <Route path="/fees" element={<Fees />} />
               <Route path="/Result" element={<Results />} />
              <Route path="/Course" element={<Courses />} />
              <Route path="/Transaction" element={<Transactions />} />
               <Route path="/Payment" element={<Payment />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
