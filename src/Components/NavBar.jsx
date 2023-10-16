import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Welcome</Link>
      <Link to="/logs">Log</Link>
      <Link to="/logs/new">New Log</Link>     
    </nav>
  );
}