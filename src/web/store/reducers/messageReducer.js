import { SET_MESSAGE_LIST, ADD_MESSAGE } from './../actionTypes.js';

const initialState = {
    messages: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_MESSAGE_LIST:
            return { messages: action.messages };
        case ADD_MESSAGE:
            return {
                messages: [...state.messages, action.message]
            };
        default:
            return state;
    }
}
