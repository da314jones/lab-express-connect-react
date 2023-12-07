import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CaptainLogs from "./Components/CaptainLogs";
import CaptainLogEditForm from "./Components/CaptainLogEditForm"
import CaptainLogNewForm from "./Components/CaptainLogNewForm"
import NavBar from "./Components/NavBar";
import Welcome from "./Components/Welcome";
import Log from "./Components/Log";
import LogDetails from "./Components/LogDetails";

function App() {
  return ( 
    <Router>
        <NavBar />
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/logs" element={<CaptainLogs />} />
        <Route path="/logs/:id" element={<LogDetails />} />
        <Route path="/logs/:id/edit" element={<CaptainLogEditForm />} />
        <Route path="/logs/new" element={<CaptainLogNewForm />} />
      </Routes>
    </Router>
  );
}

export default App;
