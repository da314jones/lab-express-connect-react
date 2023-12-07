import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_BASE_URL;

export default function CaptainLogEditForm() {
  let { id } = useParams();
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/logs/${id}`)
      .then((response) => response.json())
      .then((log) => {
        setLog(log);
      })
      .catch(() => navigate("/not-found"));
  }, [id, navigate]);

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const updateLog = () => {
    const httpOptions = {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch(`${API}/logs/${id}`, httpOptions)
      .then(() => {
        alert(`${log.title} has been updated!`);
        navigate(`/logs/${id}`);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateLog();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-4xl font-semibold leading-7 text-gray-900">Edit Log Entry</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Update the details for this captain's log entry.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="captainName" className="block text-sm font-medium leading-6 text-gray-900">
              Captain Name
            </label>
            <input
              id="captainName"
              value={log.captainName}
              type="text"
              onChange={handleTextChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={log.title}
              onChange={handleTextChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            />
          </div>

          <div className="col-span-full">
            <label htmlFor="post" className="block text-sm font-medium leading-6 text-gray-900">
              Post
            </label>
            <textarea
              id="post"
              value={log.post}
              onChange={handleTextChange}
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="sm:col-span-6">
            <label htmlFor="mistakesWereMadeToday" className="block text-sm font-medium leading-6 text-gray-900">
              Mistakes Were Made Today
            </label>
            <input
              id="mistakesWereMadeToday"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={log.mistakesWereMadeToday}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="daysSinceLastCrisis" className="block text-sm font-medium leading-6 text-gray-900">
              Days Since Last Crisis
            </label>
            <input
              id="daysSinceLastCrisis"
              type="number"
              value={log.daysSinceLastCrisis}
              onChange={handleTextChange}
              placeholder="0"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link to={`/logs/${id}`} className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </Link>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Update
        </button>
      </div>
    </form>
  );
}
