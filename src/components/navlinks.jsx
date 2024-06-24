import { Link, NavLink } from "react-router-dom";

const links = [
  { id: 1, text: "Home", link: "/" },
  { id: 2, text: "Articles", link: "/articles" },
  { id: 3, text: "About", link: "/about" },
  { id: 4, text: "Contact", link: "/contact" },
];
function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <div key={link.id}>
            <li>
              <NavLink className="pages" to={link.link}>
                {link.text}
              </NavLink>
            </li>
          </div>
        );
      })}
    </>
  );
}

export default NavLinks;
