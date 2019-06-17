import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useWebsockets from './useWebsockets.js';
import constants from './../../shared/constants.js';
import { SET_USERNAME, SET_CONNECTED } from './../store/actionTypes.js';

const { SOCKET_EVENTS } = constants;

export default function useUser() {
    const { connect, disconnect, on, off, emit } = useWebsockets({
        autoConnect: false
    });
    const { username, connected } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onConnection = useCallback(() => {
        const onDisconnect = () => {
            dispatch({ type: SET_CONNECTED, connected: false });

            off(SOCKET_EVENTS.CONNECTION_SUCCESS, onConnection);
            off(SOCKET_EVENTS.DISCONNECTION, onDisconnect);
        };

        dispatch((dispatch, getState) => {
            dispatch({ type: SET_CONNECTED, connected: true });
            emit(SOCKET_EVENTS.ADD_USER, getState().user.username);
        });

        on(SOCKET_EVENTS.DISCONNECTION, onDisconnect);
    }, [dispatch, emit, off, on]);

    return {
        username,
        connected,

        connect(username) {
            connect();
            dispatch({ type: SET_USERNAME, username });
            on(SOCKET_EVENTS.CONNECTION_SUCCESS, onConnection);
        },

        disconnect() {
            disconnect();
        }
    };
}
