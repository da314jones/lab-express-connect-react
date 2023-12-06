import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_BASE_URL;

export default function Log() {
  const [newLog, setNewLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0
  });
  
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setNewLog({ ...newLog, [e.target.id]: e.target.value });
  };

  const addLog = () => {
    const httpOptions ={
      METHOD: 'POST',
      body: JSON.stringify(newLog),
      headers: {
        "Content-type": "application/json"
      }
    };
    fetch(`${API}/logs`, httpOptions)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error adding new log")
      }
      alert(`${newLog.title} was added to the database!`);
      navigate('/logs');
    })
    .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLog();
  };

  return (
    <div className="newLog">
<form onSubmit={handleSubmit}>
  <label htmlFor="captainName">Captain Name:</label>
  <input
  id="captainName"
  value={newLog.captainName}
  type="text"
  onChange={handleTextChange}
  required/>
  <label htmlFor="post">Post:</label>
  <textarea
  id="post"
  value={newLog.post}
  onChange={handleTextChange}
  />
  <label htmlFor="mistakesWereMadeToday">Mistakes Were Made Today:</label>
  <input 
  id="mistakesWereMadeToday"
  type="checkbox"
  onChange={handleTextChange}
  checked={newLog.mistakesWereMadeToday}
   />
<label htmlFor="daysSinceLastCrisis">Day Since Last Crisis:</label>
<input 
id="daysSinceLastCrisis"
type="number"
value={newLog.daysSinceLastCrisis}
onChange={handleTextChange}
 />
 <br />
 <input type="submit" />
</form>
    </div>

  )
};

