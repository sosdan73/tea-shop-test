import React, { useState } from 'react';
import Card from '../Card/Card'
import './Group.css'

function Group({group, data, onAdd, onRemove}) {
    const products = data.map(item => <Card item={item} key={item.id} onAdd={onAdd} onRemove={onRemove} />)
    const [groupVisible, setGroupVisible] = useState(false);
    const toggleVisibility = () => {
        setGroupVisible(!groupVisible)
    }

    return (
        <div className="group">
            <div
                className={'group__header' + (groupVisible ? ' --rotated' : '')}
                onClick={toggleVisibility}
            >
                <span className="group__title">{ group.title }</span>
            </div>
            <div className="group__content">
                { groupVisible ? products : '' }
            </div>
        </div>
    )
};

export default Group;