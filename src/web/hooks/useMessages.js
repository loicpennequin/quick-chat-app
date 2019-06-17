import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useWebsockets from './useWebsockets.js';
import constants from './../../shared/constants.js';
import { SET_MESSAGE_LIST, ADD_MESSAGE } from './../store/actionTypes.js';

const { SOCKET_EVENTS } = constants;

export default function useUser() {
    const { on, emit } = useWebsockets();
    const { messages } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const getAllMessages = useCallback(
        messages => {
            dispatch({ type: SET_MESSAGE_LIST, messages });
        },
        [dispatch]
    );

    const onNewPublicMessage = useCallback(
        message => {
            dispatch({ type: ADD_MESSAGE, message });
        },
        [dispatch]
    );

    const getMessages = useCallback(() => {
        emit(SOCKET_EVENTS.GET_ALL_MESSAGES);
    }, [emit]);

    const sendPublicMessage = useCallback(
        message => {
            emit(SOCKET_EVENTS.NEW_PUBLIC_MESSAGE, message);
        },
        [emit]
    );

    return {
        messages,
        getMessages,
        sendPublicMessage,
        listenToPublicMessages: useCallback(() => {
            on(SOCKET_EVENTS.GET_ALL_MESSAGES, getAllMessages);
            on(SOCKET_EVENTS.NEW_PUBLIC_MESSAGE, onNewPublicMessage);
        }, [getAllMessages, on, onNewPublicMessage])
    };
}
