import React, { useEffect } from 'react';
import useMessages from '../../../hooks/useMessages';
import Message from './Message';

const MessageList = () => {
    const { messages, listenToPublicMessages, getMessages } = useMessages();

    useEffect(() => {
        getMessages();
        listenToPublicMessages();
    }, [getMessages, listenToPublicMessages]);

    return (
        <ul>
            {messages.map((message, index) => (
                <li key={index}>
                    <Message message={message} />
                </li>
            ))}
        </ul>
    );
};

export default MessageList;
