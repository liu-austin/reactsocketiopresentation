// jshint esversion:6

export const setCurrentPage = (page) => {
    return ({
        type: 'SET_CURRENT_PAGE',
        payload: page
    });
};