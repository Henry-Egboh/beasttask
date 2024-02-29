import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <Link to="/about" className="back-home">About App</Link>
      </p>
    </footer>
  );
};

export default Footer;
