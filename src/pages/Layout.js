import { Outlet, Link } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Layout</Link>
          </li> */}
          <li>
            <Link to="/App2">RollDice</Link>
          </li>
          <li>
            <Link to="/App1">Todo</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;