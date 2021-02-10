import React  from 'react';

function TrendingList({content}) {
    // console.log("trend: ", content)
    return (
    // console.log(content),
    <div className="mains">
        {
            <section className="main main-section"  key={content.id} >
                {content.id}.{content.title}
            </section>
        }
        </div>
    )
}

export default TrendingList; 