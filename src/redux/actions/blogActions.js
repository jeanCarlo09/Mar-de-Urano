import { types } from '../../types/types';


export const fetchBlogs = (posts) => {
    return dispatch => {
        dispatch({
            type: types.fetchBlogSuccess,
            payload: posts
        });
    }
}

export const postSingleInfo = (id) => {
    return dispatch => {
        dispatch({
            type: types.postSingleInfo,
            payload: id
        });
    }
}