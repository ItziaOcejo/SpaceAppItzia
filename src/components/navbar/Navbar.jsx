import "./Navbar.css";
import { Link } from "react-router-dom";
import RocketIcon from '@mui/icons-material/Rocket';

function Navbar ({ header, links }) {
    return (
        <nav>
            <div>
                <RocketIcon />
                <h2>{header}</h2>
            </div>
            <div>
                {links.map((link) => (
                    <Link className="link" to={link.link} key={link.id}>
                        {link.text}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;