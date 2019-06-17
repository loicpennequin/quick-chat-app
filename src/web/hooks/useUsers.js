import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useWebsockets from './useWebsockets.js';
import constants from './../../shared/constants.js';
import { SET_CONNECTED_USERS } from './../store/actionTypes.js';

const { SOCKET_EVENTS } = constants;

export default function useUser() {
    const { on, emit } = useWebsockets();
    const { connectedUsers } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const getUsers = useCallback(
        users => {
            dispatch({ type: SET_CONNECTED_USERS, users });
        },
        [dispatch]
    );

    return {
        users: connectedUsers,
        getUsers: useCallback(() => {
            emit(SOCKET_EVENTS.GET_USERS);
            on(SOCKET_EVENTS.GET_USERS, getUsers);
        }, [emit, getUsers, on])
    };
}
