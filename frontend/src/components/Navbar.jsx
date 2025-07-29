import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to="/">ML App</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/predict">Predict</Link></li>
        </ul>
      </div>
    </div>
  );
}
