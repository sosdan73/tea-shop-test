import React, { useState, useEffect } from 'react';
import { getData } from "../db/db";
import Group from "./Group/Group";
import Cart from "./Cart/Cart";

const tg = window.Telegram.WebApp;

const groups = [
    { id: 0, type: 'white', title: 'Белый чай' },
    { id: 1, type: 'green', title: 'Зеленый чай' },
    { id: 2, type: 'oolong', title: 'Улун' },
    { id: 3, type: 'black', title: 'Черный чай' },
    { id: 4, type: 'puer', title: 'Пуэр' },
    { id: 5, type: 'mixes', title: 'Чайные смеси' },
]

const MainController = () => {
    const [data, setData] = useState(getData());
    const [cartItems, setCartItems] = useState([]);
    
    const filteredData = type => data.filter(tea => tea.type === type);
    const makeCartButton = () => {
        tg.MainButton.text = 'В корзину';
        tg.MainButton.show();
        cartItems.length ? tg.MainButton.enable() : tg.MainButton.disable();
    }
    const onAdd = (tea) => {
        const exist = cartItems.find((item) => item.id === tea.id);
        if (exist) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === tea.id ? { ...exist, count: exist.count + 1 } : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...tea, count: 1 }]);
        }
    };
    const onRemove = (tea) => {
        const exist = cartItems.find((item) => item.id === tea.id);
        if (exist.count === 1) {
            setCartItems(cartItems.filter((item) => item.id !== tea.id));
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === tea.id ? { ...exist, count: exist.count - 1 } : item
                )
            );
        }
        if (!cartItems.length) {
            tg.MainButton.disable();
        }
    };
    
    useEffect(() => {
        tg.ready();
        makeCartButton();
    });

    return (
        <>
            <div className="app__header">
                <h1 className="app__title">Выберите чай, который хотите попробовать</h1>
            </div>
            { groups.map(group => <Group group={group} key={group.id} data={filteredData(group.type)} onAdd={onAdd} onRemove={onRemove}/>) }
        </>
    )
}

export default MainController;
