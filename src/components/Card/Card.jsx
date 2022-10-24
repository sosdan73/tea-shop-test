import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";

// function Card({ item, onAdd, onRemove }) {
function Card({ item, onAdd, onRemove }) {
    const [count, setCount] = useState(0);
    const { name, image, price, id } = item;

    const handleIncrement = () => {
        setCount(count + 1);
        item.count++;
        onAdd(item);
    };
    const handleDecrement = () => {
        setCount(count - 1);
        item.count--;
        onRemove(item);
    };

    return (
        <div className="card">
            <span
                className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
            >
                {count}
            </span>
            <div className="image__container">
                <img src={item.image} alt={item.name} />
            </div>
            <h4 className="card__name">
                {item.name}
            </h4>
            <div className="card__name">
                {item.mass}г за <span className="card__price">&#8362;{item.price}</span>
            </div>
            <div className="btn-container">
                {count !== 0 ? (
                    <Button title={"-"} type={"remove"} onClick={handleDecrement} />
                ) : (
                    ""
                )}
                <Button title={"+"} type={"add"} onClick={handleIncrement} />
            </div>
        </div>
    );
}

export default Card;