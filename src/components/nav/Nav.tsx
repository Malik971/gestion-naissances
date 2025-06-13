import { Link } from "react-router";
import { NAV_LINKS } from "../../utils/data";

function Nav() {
  return (
    <nav className="z-index bg-white shadow-2xl w-56 fixed flex flex-col justify-between top-0 left-0 bottom-0 ">
      <Link
        to={"/private/declaration"}
        className="text-blue-700 text-xl font-extrabold p-4 hover:bg-blue-100 transition-colors duration-200  "
      >
        Les nouvelles vies
      </Link>
      <ul>
        {NAV_LINKS.map(({ to, label }, index) => (
          <li
            key={`navlink-${index}`}
            className={`border-b border-gray-300 ${
              index === 0 ? "border-t" : null
            }
          }`}
          >
            <Link
              to={to}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => null}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300"
      >
        Déconnexion
      </button>
    </nav>
  );
}

export default Nav;
