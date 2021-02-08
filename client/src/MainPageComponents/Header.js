import React  from 'react';

function Header() {
    return (
        <div className="headers">
            <form action="URL">
                <input type="button" className="header header-trend" value="트렌딩"></input>
                <input type="button" className="header header-new" value="최신"></input> 
            </form>
        </div>
    ) 
}

export default Header;
