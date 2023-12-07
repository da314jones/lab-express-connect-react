import { Link } from "react-router-dom";
import "./Log.css"

export default function Log({ log, index }) {

  const rowBgColor = index % 2 === 0 ? 'bg-white' : 'bg-neutral-100'; 


  return (
    <tr className={rowBgColor}>
      <td className="text-center border">{log.mistakesWereMadeToday ? "Yes" : "No"}</td>
      <td className="text-center border">{log.captainName}</td>
      <td className="text-center border">{log.title}</td>      
      <td className="text-center border">{log.daysSinceLastCrisis}</td>      
      <td className="text-center border">
      <Link className="details-link" to={`/logs/${index}`}>Details
      </Link>
        </td>     
    </tr>
  );
}
