import "./LogDetails.css"
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const API = process.env.REACT_APP_BASE_URL;

export default function LogDetails() {
  const [log, setNewLog] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      console.error('No ID provided');
      navigate("/not-found");
      return;
    }

    fetch(`${API}/logs/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then(logData => {
        setNewLog(logData);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        navigate("/not-found");
      });
  }, [id, navigate]);

  const handleDelete = () => {
    const httpOptions = { "method" : "Delete"};
    fetch(`${API}/logs/${id}`, httpOptions)
      .then((res) => {
        alert("Log entry was deleted successfully!");
        navigate('/logs');
      })
      .catch((err) => console.error(err));
  };
  
  return (
    <div className="details-container">

    <div class="  block w-full rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div class="p-6">
        <h5 class="mb-1 text-4xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Log Details
        </h5>
        <h6 class="mb-2 text-xl font-medium leading-tight text-neutral-500 dark:text-neutral-50">
          {log.title}
        </h6>
        <p class="mb-4 text-xl leading-normal text-neutral-600 dark:text-neutral-200">
          {log.post}
        </p>
        <p class="mb-4 text-xl leading-normal text-neutral-600 dark:text-neutral-200">
          Mistakes Made Today: {log.mistakesWereMadeToday ? "Yes" : "No"}
        </p>
        <p class="mb-4 text-xl leading-normal text-neutral-600 dark:text-neutral-200">
          Days Since Last Crisis: {log.daysSinceLastCrisis}
        </p>
    </div>
    </div>
        <div class="flex space-x-4">
          <Link to={`/logs/${id}/edit`} class="inline-block w-1/3 text-center rounded-md border border-primary-600 text-primary-600 hover:text-primary-700 px-4 py-2 text-xl bg-slate-500 text-white text-primary-600  hover:bg-green-500 hover:text-white-900">
            Edit
          </Link>
          <button onClick={handleDelete} class="inline-block w-1/3 text-center rounded-md border border-primary-600 text-xl text-primary-600 hover:text-primary-700 px-4 py-2  bg-slate-500 text-white text-primary-600  hover:bg-green-500 hover:text-white-900">
            Delete
          </button>
          <Link to={`/logs`} class="inline-block w-1/3 text-center rounded-md border border-primary-600 text-xl text-primary-600 hover:text-primary-700 px-4 py-2  bg-slate-500 text-white text-primary-600  hover:bg-green-500 hover:text-white-900">
            Back
          </Link>
        </div>
      </div>
  );
}
