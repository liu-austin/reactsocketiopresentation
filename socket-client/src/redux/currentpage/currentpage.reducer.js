// jshint esversion:9

const INITIAL_STATE = {
    currentpage: '/'
};

const currentPageReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PAGE':
            return ({
                ...state,
                currentpage: action.payload
            });
        default:
            return state;
    }
};

export default currentPageReducer;
