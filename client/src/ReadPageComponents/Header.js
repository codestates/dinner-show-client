import React  from 'react';

function Header() {
    return (
        <div className="headers">
            <form action="URL">
                <input type="button" className="header header-heart" value="♥"></input>
                <input type="text" className="header header-write"></input>
            </form>
        </div>
    ) 
}

export default Header;
