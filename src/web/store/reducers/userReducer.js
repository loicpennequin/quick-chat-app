import {
    SET_USERNAME,
    SET_CONNECTED,
    SET_CONNECTED_USERS
} from './../actionTypes.js';

const initialState = {
    username: '',
    connected: false,
    connectedUsers: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_USERNAME:
            return { ...state, username: action.username };
        case SET_CONNECTED:
            return { ...state, connected: action.connected };
        case SET_CONNECTED_USERS:
            return { ...state, connectedUsers: action.users };
        default:
            return state;
    }
}
