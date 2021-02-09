import React  from 'react';

function Main() {
    return (
        <div className="mains">
            {/* //? section: block */}
            <form>
                <input type="text" className="comment"></input>
                <input type="button" className="comment-btn" value="button"></input>
            </form>
            
            <div>
                <section className="commentlist">
                    comment2
                </section>
                <section className="commentlist">
                    comment3
                </section>
                <section className="commentlist">
                    comment4
                </section>          
                <section className="commentlist">
                    comment5
                </section>
            </div>
        </div>
    ) 
}

export default Main;

