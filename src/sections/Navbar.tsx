import { Link } from "react-router-dom";
import pokeballicon from "../assets/pokeball-icon.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navigationRoutes = [
    {
      name: "Search",
      route: "/search",
    },
    {
      name: "Compare",
      route: "/compare",
    },
    {
      name: "Pokemon",
      route: "/pokemon",
    },
    {
      name: "My List",
      route: "/list",
    },
    {
      name: "About",
      route: "/about",
    },
  ];

  return (
    <nav>
      <div className='block'>
        <img src={pokeballicon} alt='pokeball icon' />
      </div>
      <div className='data'>
        <ul>
          <div className='underline'></div>
          <div className='underline'></div>
          <div className='underline'></div>
          {navigationRoutes.map(({ name, route }, index) => {
            return (
              <Link to={route} key={index}>
                <li>{name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className='block'>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
