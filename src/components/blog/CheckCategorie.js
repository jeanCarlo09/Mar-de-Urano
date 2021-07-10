import React, { useState } from 'react'


export const CheckCategorie = ({ category }) => {

    const [checkedState, setCheckedState] = useState(false);

    const click = () => {
        setCheckedState(!checkedState);
    }

    return (
        <>
            <input type="checkbox" checked={checkedState} onChange={click} />
            <button onClick={click}>
                {category.title} <span>{category.blog_post.length}</span>
            </button>
        </>
    );

}