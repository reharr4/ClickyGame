import React from "react";
import "./style.css";

const Card = (props) => {
    return(
          <div className="card" onClick={()
          => props.clickCount(props.id)}>
            <div className="card-image">
                <img
                alt={props.names}
                src={props.img} />
          </div>
        </div>
    )
};

export default Card;