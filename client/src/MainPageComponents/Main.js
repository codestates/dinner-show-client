import React  from 'react';

function Main({content}) {
    // console.log(content)
    // let addContent = <div className="mains">{contentmap((content) => (<section className="main main-section" key={content.id}>{content.id}.{content.title}</section>))}</div>
    // document.querySelector('.container').append(addContent);
    return (
        // console.log(content),
        <div className="mains">
            {

            // document.querySelector('.mains').append(
                <section className="main main-section" key={content.id}>
                    {content.id}.{content.title}
                </section>
                // )
            }
            </div>
        )
    }
        
    export default Main;
