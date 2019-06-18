export default {
    APP_URL: `${process.env.APP_URL}:${process.env.PORT}`,
    ROLES: {
        SYSTEM: 'System'
    },
    SOCKET_EVENTS: {
        CONNECTION: 'connection',
        CONNECTION_SUCCESS: 'connect',
        DISCONNECTION: 'disconnect',
        ADD_USER: 'add user',
        GET_USERS: 'get users',
        NEW_PUBLIC_MESSAGE: 'new public message',
        GET_ALL_MESSAGES: 'get all messages'
    }
};
