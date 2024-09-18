import Logo from "../assets/react.svg";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark shadow-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Navbar" width="30" height="24" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
