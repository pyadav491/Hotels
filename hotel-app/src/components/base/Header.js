import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="c-header">
            <Link to="/" className="c-logo">
                <img src="https://media.webjet.com.au/ui/images/webjet-logo-au-red.png" alt="webjet logo"/>
            </Link>
        </div>
    )
}

export default Header;