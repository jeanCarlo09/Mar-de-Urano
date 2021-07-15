import { types } from '../../types/types';

const initialState = {
    posts: [],
    postActive: {},
    single: false,
    categoriesActives: []
};

const blogReducer = (state = [], action) => {

    switch (action.type) {
        case types.fetchBlogSuccess:

            return {
                ...state,
                posts: action.payload,
                single: false,
                postActive: {},
                // categoriesActives: []
            }

        case types.postSingleInfo:
            return {
                ...state,
                postActive: state.posts.filter((post) => (post.handle === action.payload))[0],
                single: true,
                // categoriesActives: []
            }

        case types.addActiveCategory:
            return {
                ...state,
                categoriesActives: [...state.categoriesActives, action.payload]
            }

        case types.removeActiveCategory:
            return {
                ...state,
                categoriesActives: state.categoriesActives.filter((item) => item != action.payload)
            }

        default:
            return state;
    }
}

export default blogReducer;
