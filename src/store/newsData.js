import { combineReducers } from 'redux';

export const initialValue = {
    state: {
        newsContent: {
          kr: {
            all: [],
            entertainment: [],
            business: [],
            health: [],
            science: [],
            sports: [],
            technology: [],
          },
          jp: {
            all: [],
            entertainment: [],
            business: [],
            health: [],
            science: [],
            sports: [],
            technology: [],
          },
          us: {
            all: [],
            entertainment: [],
            business: [],
            health: [],
            science: [],
            sports: [],
            technology: [],
          },
          cn: {
            all: [],
            entertainment: [],
            business: [],
            health: [],
            science: [],
            sports: [],
            technology: [], 
          }
        },
    }
};

export const GET_POST = 'store/GET_POST'

export async function getpost(country, category) {
// getpost 불러온 거 확인

    return {
        type: GET_POST,
        post: url.data
    };
}

function newsData(state = initialValue, action) {
  // console.log(`${JSON.stringify(action)}`)
    switch(action.type) {
        case GET_POST:
            // console.log('[REDUX]ADD ITEM')
            // console.log(`${JSON.stringify(state)}`)            
            // let newState = {productsList:[...state.productsList]}
            let newState = {...state.newsContent[country][category]} // immer나 중첩되게 한 번 더 복사.
            newState.productsList.push(action.newItem)
            return newState
        default:
            return state
    }
}

const newsReducer = combineReducers({ newsData });

export default newsReducer;