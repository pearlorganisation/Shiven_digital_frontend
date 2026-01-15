import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold">
          BrandName
        </Link>

        <nav className="flex gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
