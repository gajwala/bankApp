import links from "../utils/links";
import { NavLink } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { showSidebar } from "../Atoms/showSidebar";

const NavLinks = ({ isBigSidebar }) => {
  const setShowSidebar = useSetRecoilState(showSidebar);
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link;

        return (
          <NavLink
            to={path}
            key={id}
            onClick={() => {
              return !isBigSidebar ? setShowSidebar((c) => !c) : {};
            }}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
