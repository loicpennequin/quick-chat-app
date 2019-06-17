import React from 'react';
import useUser from './../../hooks/useUser.js';
import UsersList from './UsersList';
import MessageForm from './MessageForm';
import MessageList from './MessageList/index';
import { Wrapper, FullWidth, LogoutButton, Header, Banner } from './styles';
import { FaPowerOff } from 'react-icons/fa';

const Chatroom = () => {
    const { username, disconnect } = useUser();

    return (
        <Wrapper>
            <Header>
                <Banner>Hello, {username}</Banner>
                <LogoutButton secondary onClick={disconnect}>
                    <FaPowerOff style={{ marginRight: '5px' }} />
                    Logout
                </LogoutButton>
            </Header>

            <MessageList />
            <UsersList />

            <FullWidth>
                <MessageForm />
            </FullWidth>
        </Wrapper>
    );
};

export default Chatroom;
