import { Link } from "react-router-dom";
import style from "./Header.module.css"

const Header = () => {
    return (
        
            <nav>
                <div>
                <Link className={style.link} to="/">Signin</Link>
                <Link  className={style.link} to="signup">Signup</Link>
                </div>
            </nav>
        
    )
};
export default Header;
