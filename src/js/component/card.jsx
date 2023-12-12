import React from "react";

function Card() {
    return (
        <div className="card m-auto  mb-4"  >
            <img src="https://picsum.photos/id/34/500/325" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-footer">
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
export default Card;