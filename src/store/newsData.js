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

export const GET_POST = 'store/GET_POST';

export async function getPost(country, category) {
// getpost 불러온 거 확인

    return {
        type: GET_POST,
        // post는 받아온 country의 category 뉴스.
        newPost: initialValue.state.newsContent[country][category] // ??? 어떻게 해야할까? 
    };
}

function newsData(state = initialValue, action) {
  // console.log(`${JSON.stringify(action)}`)
    switch(action.type) {
        case GET_POST:
            // console.log(`${JSON.stringify(state)}`)            
            let newState = {...state.newsContent}
            newState.state.newsContent.push(action.newPost)
            return newState
        default:
            return state
    }
}

const newsReducer = combineReducers({ newsData });

export default newsReducer;