import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useWebsockets from './useWebsockets.js';
import constants from './../../shared/constants.js';
import { SET_USERNAME, SET_CONNECTED } from './../store/actionTypes.js';

const { SOCKET_EVENTS } = constants;

export default function useUser() {
    const { connect, disconnect, on, emit, cleanup } = useWebsockets({
        autoConnect: false
    });
    const { username, connected } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onConnection = useCallback(
        resolve => {
            function onSuccess() {
                dispatch({ type: SET_CONNECTED, connected: true });
                resolve(true);
            }
            function onError() {
                dispatch({ type: SET_CONNECTED, connected: false });
                dispatch({ type: SET_USERNAME, username: undefined });
                resolve(false);
            }

            const onDisconnect = () => {
                dispatch({ type: SET_CONNECTED, connected: false });
                cleanup();
            };

            dispatch((dispatch, getState) => {
                emit(SOCKET_EVENTS.ADD_USER, getState().user.username);

                on(SOCKET_EVENTS.USERNAME_AVAILABLE, onSuccess);
                on(SOCKET_EVENTS.USERNAME_UNAVAILABLE, onError);
            });

            on(SOCKET_EVENTS.DISCONNECTION, onDisconnect);
        },
        [cleanup, dispatch, emit, on]
    );

    return {
        username,
        connected,

        connect(username) {
            return new Promise(resolve => {
                connect();
                dispatch({ type: SET_USERNAME, username });
                function onConnect() {
                    onConnection(resolve);
                }
                on(SOCKET_EVENTS.CONNECTION_SUCCESS, onConnect);
            });
        },

        disconnect() {
            disconnect();
        },

        onUnknownUsername(cb) {
            on(SOCKET_EVENTS.USERNAME_UNAVAILABLE, cb);
        }
    };
}
