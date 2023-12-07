import React, { useEffect, useState } from "react";
import Log from "./Log";
import "./CaptainLogs.css";
const API = process.env.REACT_APP_BASE_URL;

export default function CaptainLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch(`${API}/logs`)
      .then((response) => {
        if (response.headers.get('content-type').includes('application/json')) {
          return response.json();
        }
        throw new Error('Not a JSON response');
      })
      .then((data) => {
        setLogs(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="logs-container flex flex-col CaptainLogs">
      <h3 className="text-5xl">Index</h3>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className=" table-container overflow-hidden">
            <table className=" logs-container-table min-w-full text-left text-sm font-light">
              <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  {/* <th scope="col" className="px-6 py-4">#</th> */}
                  <th scope="col" className="px-6 py-4 text-center border">Mistakes Made Today</th>
                  <th scope="col" className="px-6 py-4 text-center border">Captain Name</th>
                  <th scope="col" className="px-6 py-4 text-center border">Title</th>
                  <th scope="col" className="px-6 py-4 text-center border">Days Since Last Crisis</th>
                  <th scope="col" className=" px-6 py-4 text-center border">Details</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log, index) => (
                  <Log key={index} index={index} log={log} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
