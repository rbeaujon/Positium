export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';
export const SET_ERROR = 'SET_ERROR';

/** @namespace Positium/Store/Positium/Positium/Action/isSubmitted */
export const isAuthenticated = (login, id, name, ip) => ({
    type: IS_AUTHENTICATED,
    payload: {
        login,
        id,
        name,
        ip

    }
});

/** @namespace Positium/Store/Positium/Positium/Action/setError */
export const setError = (error) => ({
    type: SET_ERROR,
    payload: {
        error

    }
});