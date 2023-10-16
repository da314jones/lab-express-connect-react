import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const API = process.env.REACT_APP_BASE_URL;


export default function LogDetails() {
  const [log, setNewLog] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`$A{API}/logs/${id}`)
    .then(res => res.json())
    .then(capLogs => {
      console.log(capLogs);
      setNewLog(capLogs);
    })
    .catch(() => navigate("/not-found"))
  }, [id, navigate]);

  const handleDelete = () => {
    const httpOptions = { "method" : "Delete"};
    fetch(`${API}/logs/${id}`, httpOptions)
    .then((res) => {
      console.log(res);
      alert("Log entry was deleted successfully!");
      navigate('/logs');
    })
    .catch((err) => console.error(err))
  };
  
  return (
    <article>
    <h1><strong>Captain Name:</strong> {log.captainName}</h1>
    <p><strong>Title:</strong> {log.title}</p>
    <p>Post: {log.post}</p>
    <p>Mistakes Made Today:{log.mistakesWereMadeToday ? "Yes" : "No"}</p>
    <p>Days Since Last Crisis:<strong>{log.daysSinceLastCrisis}</strong></p>
    <div className="showNavigation">
      <div>
        <Link to={`logs`}>
          <button>Back</button>
        </Link>
      </div>
      <div>
        <Link to={`/logs/${id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <div>
        <button onClick={handleDelete}> Delete</button>
      </div>
</div>
</article>
  );
};

