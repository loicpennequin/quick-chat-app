export default {
    APP_URL:
        process.env.NODE_ENV === 'production'
            ? 'https://daria-quick-chat-app.herokuapp.com'
            : 'http://localhost:8000',
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
        GET_ALL_MESSAGES: 'get all messages',
        USERNAME_UNAVAILABLE: 'username unavailable',
        USERNAME_AVAILABLE: 'username available'
    }
};
