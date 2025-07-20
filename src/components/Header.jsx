import { Link, NavLink } from 'react-router-dom';

function Header() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/gallery", label: "Gallery" },
    { to: "/booking", label: "Booking" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading text-gold tracking-wide">
          Lush Looks
        </Link>
        <nav className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-dark font-medium hover:text-gold transition duration-300 ${isActive ? 'text-gold' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
