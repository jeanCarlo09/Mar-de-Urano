import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addActiveCategory, removeActiveCategory } from '../../redux/actions/blogActions';


export const CheckCategorie = ({ category }) => {

    const dispatch = useDispatch();
    const [checkedState, setCheckedState] = useState(false);

    const click = () => {

        (checkedState) ? dispatch(removeActiveCategory(category.handle)) : dispatch(addActiveCategory(category.handle));

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