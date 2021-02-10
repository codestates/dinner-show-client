import React  from 'react';

function Header(props) {
    // console.log(props)

    return (
        <div className="headers">
            <form action="URL">
                <input onClick={props.getSearchData} type="button" className="header header-trend" value="트렌딩"></input>
                <input onClick={props.getSearchData} type="button" className="header header-new" value="최신"></input> 
            </form>
        </div>
    ) 
}

export default Header;
