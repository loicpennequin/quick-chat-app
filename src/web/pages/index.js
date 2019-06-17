import React, { useCallback } from 'react';
import useUser from './../hooks/useUser.js';
import LoginForm from './../components/LoginForm';
import Chatroom from './../components/Chatroom';

import styled from 'styled-components';
import { linearGradient } from 'polished';

const Home = () => {
    const { connected, connect } = useUser();
    const handleSubmit = useCallback(
        username => {
            connect(username);
        },
        [connect]
    );

    return (
        <Main>
            {connected ? <Chatroom /> : <LoginForm onSubmit={handleSubmit} />}
        </Main>
    );
};

const Main = styled.main`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) =>
        linearGradient({
            colorStops: [theme.colors.primary, theme.colors.secondary],
            toDirection: '130DEG',
            fallback: theme.colors.primary
        })};
`;

export default Home;
