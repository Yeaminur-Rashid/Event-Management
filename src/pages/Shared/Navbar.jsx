import { Link, NavLink } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "../../Hook/AuthProvider";

// import 'aos/dist/aos.css';
// import Aos from "aos";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // // initialized aos package
  // useEffect(() =>{
  //   Aos.init();
  // }, [])

  // sign out a user
  const handleLogOut = () => {
    logOut()
    .then()
    .catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-purple-400">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu font-avenir menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <p className="normal-case font-montserrat font-bold text-xl">
          MuslimFesti
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-avenir menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        {user?.displayName ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm  btn-ghost">
                  {user.displayName}
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="font-avenir mr-10 px-2 py-1 rounded bg-green-900 text-white"
                >
                  Log out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="font-avenir mr-10 px-3 py-1 rounded bg-green-900 text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
