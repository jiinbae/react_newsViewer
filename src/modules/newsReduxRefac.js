import { Switch } from "react-router";
import { createAction, handleActions } from "redux-actions";

const USNEWS = 'newsReduxRefac/USNEWS'; // 액션 타입.
const KRNEWS = 'newsReduxRefac/KRNEWS';
const CNNEWS = 'newsReduxRefac/CNNEWS';
const JPNEWS = 'newsReduxRefac/JPNEWS';


// export const usNews = () => ({ type: USNEWS }); // 액션 생성 함수.
// export const krNews = () => ({ type: KRNEWS });
// export const cnNews = () => ({ type: CNNEWS });
// export const jpNews = () => ({ type: JPNEWS });

export const usNews = createAction(USNEWS);
export const krNews = createAction(KRNEWS);
export const cnNews = createAction(CNNEWS);
export const jpNews = createAction(JPNEWS);


const initialState = {
    country: 'kr'
    // category: 'all'
}

// function newsReduxRefac(state = initialState, action) {
//    switch (action.type) {
//         case USNEWS:
//             return {
//                 state: {
//                     country: 'us'
//                 }
//             };
//         case KRNEWS:
//             return {
//                 state: {
//                     country: 'kr'
//                 }
//             };
//         case CNNEWS:
//             return {
//                 state: {
//                     country: 'cn'
//                 }
//             };
//         case JPNEWS:
//             return {
//                 state: {
//                     country: 'jp'
//                 }
//             };
//         default:
//             return {
//                 state: {
//                     country: 'kr'
//                 }
//             };
//     }
// }

const newsReduxRefac = handleActions(
    {
        [USNEWS]: (state, action) => ({
            state: {
                country: 'us'
            }
        }),
        [KRNEWS]: (state, action) => ({
            state: {
               country: 'kr'
           }
       }),
       [CNNEWS]: (state, action) => ({
            state: {
                country: 'cn'
            }, // ~: action.payload
        }),
        [JPNEWS]: (state, action) => ({
            state: {
               country: 'jp'
           }
       })
    },
    initialState,
);

export default newsReduxRefac;