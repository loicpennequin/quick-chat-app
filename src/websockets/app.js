import express from 'express';
import socketio from 'socket.io';
import constants from './../shared/constants.js';

const { SOCKET_EVENTS, ROLES } = constants;

const app = express();

function log(message) {
    console.log('====================================');
    console.log(message);
    console.log('====================================');
}

app.start = server => {
    const logger = {
        log(type, message) {
            log(`WEBSOCKETS - ${type} : ${message}`);
        },
        on(message) {
            this.log('ON', message);
        },
        emit(message) {
            this.log('EMIT', message);
        }
    };
    const connectedUsers = {};
    const messages = [];

    const io = socketio.listen(server);

    io.on(SOCKET_EVENTS.CONNECTION, socket => {
        logger.on(`${SOCKET_EVENTS.CONNECTION}, ${socket.id}`);

        socket.on(SOCKET_EVENTS.ADD_USER, username => {
            logger.on(SOCKET_EVENTS.ADD_USER);
            const exists = ~Object.values(connectedUsers).indexOf(username);
            if (exists) {
                logger.emit(
                    `${SOCKET_EVENTS.USERNAME_UNAVAILABLE}, ${username}`
                );
                socket.emit(SOCKET_EVENTS.USERNAME_UNAVAILABLE);
            } else {
                connectedUsers[socket.id] = username;

                logger.emit(SOCKET_EVENTS.USERNAME_AVAILABLE);
                socket.emit(SOCKET_EVENTS.USERNAME_AVAILABLE);

                logger.emit(SOCKET_EVENTS.NEW_PUBLIC_MESSAGE);
                socket.broadcast.emit(SOCKET_EVENTS.NEW_PUBLIC_MESSAGE, {
                    author: ROLES.SYSTEM,
                    text: `${username} joined the channel.`
                });
            }
        });

        socket.on(SOCKET_EVENTS.DISCONNECTION, () => {
            logger.on(SOCKET_EVENTS.DISCONNECTION);

            logger.emit(SOCKET_EVENTS.NEW_PUBLIC_MESSAGE);
            socket.broadcast.emit(SOCKET_EVENTS.NEW_PUBLIC_MESSAGE, {
                author: 'System',
                text: `${connectedUsers[socket.id]} left the channel.`
            });
            delete connectedUsers[socket.id];

            logger.emit(SOCKET_EVENTS.GET_USERS);
            io.emit(SOCKET_EVENTS.GET_USERS, Object.values(connectedUsers));
        });

        socket.on(SOCKET_EVENTS.GET_USERS, () => {
            logger.on(SOCKET_EVENTS.GET_USERS);
            logger.emit(SOCKET_EVENTS.GET_USERS);
            io.emit(SOCKET_EVENTS.GET_USERS, Object.values(connectedUsers));
        });

        socket.on(SOCKET_EVENTS.GET_ALL_MESSAGES, () => {
            logger.on(SOCKET_EVENTS.GET_ALL_MESSAGES);

            logger.emit(SOCKET_EVENTS.GET_ALL_MESSAGES);
            socket.emit(SOCKET_EVENTS.GET_ALL_MESSAGES, messages);
        });

        socket.on(SOCKET_EVENTS.NEW_PUBLIC_MESSAGE, message => {
            logger.on(SOCKET_EVENTS.NEW_PUBLIC_MESSAGE);
            const messageObject = {
                ...message,
                timestamp: new Date()
            };
            messages.push(messageObject);

            logger.emit(SOCKET_EVENTS.NEW_PUBLIC_MESSAGE);
            io.emit(SOCKET_EVENTS.NEW_PUBLIC_MESSAGE, messageObject);
        });
    });
};

export default app;
