import { handleActions, createAction } from "redux-actions";

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

// export const getPost = id => async dispatch => {
//     dispatch({ type: GET_POST });
//     try {
//         const response = await api.getPost(id);
//         dispatch({
//             type: GET_POST_SUCCESS,
//             payload: response.data
//         });
//     } catch (e) {
//         dispatch({
//             type: GET_POST_FAILURE,
//             payload: e,
//             error: true
//         });
//         throw e;
//     }
// }

export const getPost = createRequestThunk('GET_POST', api.getPost);

const initialState = {
    // loading: {
    //     GET_POST: false
    // },
    post: null
};

const sample = handleActions(
    {
        // [GET_POST]: state => ({
        //     ...state,
        //     loading: {
        //         ...state.loading,
        //         GET_POST: true
        //     },
        // }),
        [GET_POST_SUCCESS]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_POST: false
            },
            post: action.payload
        }),
        // [GET_POST_FAILURE]: state => ({
        //     ...state,
        //     loading: {
        //         ...state.loading,
        //         GET_POST: false
        //     }
        // })
    },
    initialState
)

export default sample;