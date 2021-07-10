import { types } from '../../types/types';

const initialState = {
    posts: [],
    postActive: {},
    single: false
};

const blogReducer = (state = [], action) => {

    switch (action.type) {
        case types.fetchBlogSuccess:

            return {
                ...state,
                posts: action.payload,
                single: false,
                postActive: {}
            }

        case types.postSingleInfo:
            return {
                ...state,
                postActive: state.posts.filter((post) => (post.handle === action.payload))[0],
                single: true
            }

        default:
            return state;
    }
}

export default blogReducer;
