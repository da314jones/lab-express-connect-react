import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CaptainLogs from "./Components/CaptainLogs";
import NavBar from "./Components/NavBar";
import Welcome from "./Components/welcome";
import Log from "./Components/Log";
import LogDetails from "./Components/LogDetails";

function App() {
  return (
    <Router>
      <Routes>
        <NavBar />
        <Route exact path="/logs" component={<Welcome />} />
        <Route exact path="/logs" component={<CaptainLogs />} />
        <Route path="/logs/new" component={<Log />} />
        <Route path="/logs/:id" component={<LogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
