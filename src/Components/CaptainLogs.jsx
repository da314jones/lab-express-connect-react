import { useEffect, useState } from "react";
import Log from "./Log";
const API = process.env.REACT_APP_BASE_URL;

export default function CaptainLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch(`${API}/logs`)
    .then((response) => response.json())
    .then( logs => {
      console.log("API Data:", logs);
    setLogs(logs);
  })
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="Bookmarks">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>View Log</th>
              <th>Log Details</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => {
              return <Log key={index} log={log} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};


