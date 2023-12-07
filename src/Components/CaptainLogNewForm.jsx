import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CaptainLogNewForm.css"
const API = process.env.REACT_APP_BASE_URL;

export default function CaptainLogNewForm() {
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setLog({ ...log, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const addLog = () => {
    const httpOptions = {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch(`${API}/logs`, httpOptions)
      .then((res) => {
        console.log(res);
        alert(`Log titled '${log.title}' was added to the database!`);
        navigate("/logs");
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="form-title text-4xl font-semibold leading-7 text-gray-900 ">New Captain Log</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Fill in the details for the new captain's log entry.
        </p>
        <div className=" form-container mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
              placeholder="Captain's Name"
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
              required
              value={log.title}
              placeholder="Log Title"
              onChange={handleTextChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              placeholder="Log Post"
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="mistakesWereMadeToday" className="block text-sm font-medium leading-6 text-gray-900">
              Mistakes Were Made Today
            </label>
            <input
              id="mistakesWereMadeToday"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={log.mistakesWereMadeToday}
              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-600"
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
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => navigate('/logs')}>
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
