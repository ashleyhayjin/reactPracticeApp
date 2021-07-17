import React from "react";
import classes from './Card.module.css';


const Card = (props) => {
    // whatever name you're using, you have to use as the props.className. if it is called cssName then you need to make it called that
     return (
         <div className={`${classes.card} ${props.className}`}>{props.children}</div>
     )
}

export default Card;