import React  from 'react';

function  NewList({content}) {
    // console.log("trend: ", content)
    return (
    // console.log(content),
    <div className="mains">
        {
            <section className="main main-section" >
                {content.id}.{content.title}
            </section>
        }
        </div>
    )
}

export default  NewList; 