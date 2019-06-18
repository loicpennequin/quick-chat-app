import React, { useEffect, useRef } from 'react';
import useMessages from '../../../hooks/useMessages';
import Message from './Message';
import { Wrapper } from './styles';

const MessageList = () => {
    const { messages, listenToPublicMessages, getMessages } = useMessages();
    const listRef = useRef(null);

    useEffect(() => {
        getMessages();
        listenToPublicMessages();
    }, [getMessages, listenToPublicMessages]);

    useEffect(() => {
        const lastMessage = messages.length - 1;
        if (listRef.current && lastMessage > 0) {
            const el = listRef.current.querySelector(`#message-${lastMessage}`);
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages.length]);
    return (
        <Wrapper ref={listRef}>
            {messages.map((message, index) => (
                <li key={index}>
                    <Message message={message} id={`message-${index}`} />
                </li>
            ))}
        </Wrapper>
    );
};

export default MessageList;
