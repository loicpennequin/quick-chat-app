import { useCallback, useRef, useEffect } from 'react';
import io from 'socket.io-client';
import constants from '../../shared/constants';

let socket = io(constants.APP_URL, {
    transports: ['websocket'],
    autoConnect: false
});

export default function useWebsockets({ autoConnect = true } = {}) {
    const _subscriptions = useRef([]);

    const _cleanup = useCallback(() => {
        if (_subscriptions.current.length > 0) {
            _subscriptions.current.forEach(subscription => {
                if (socket) socket.off(...subscription);
            });
            _subscriptions.current = [];
        }
    }, [_subscriptions]);

    useEffect(
        () => () => {
            _cleanup();
        },
        [_cleanup]
    );

    const connect = useCallback(() => {
        if (!socket?.connected) {
            socket.open();
        }
    }, []);

    const disconnect = useCallback(() => {
        if (socket?.connected) {
            socket.disconnect();
        }
    }, []);

    const emit = useCallback(
        (...args) => {
            if (autoConnect && !socket?.connected) {
                connect();
            }
            socket.emit(...args);
        },
        [autoConnect, connect]
    );

    const on = useCallback(
        (...args) => {
            if (autoConnect && !socket?.connected) {
                connect();
            }
            _subscriptions.current.push([...args]);
            socket.on(...args);
        },
        [autoConnect, connect]
    );

    const off = useCallback((...args) => {
        // eslint-disable-next-line no-unused-expressions
        socket?.off(...args);
        _subscriptions.current = _subscriptions.current.filter(
            sub => sub[1] !== args[1]
        );
    }, []);

    return {
        connect,
        disconnect,
        emit,
        on,
        off
    };
}
