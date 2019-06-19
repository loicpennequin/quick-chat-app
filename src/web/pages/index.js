import React, { useCallback } from 'react';
import Head from 'next/head';
import useUser from './../hooks/useUser.js';
import LoginForm from './../components/LoginForm';
import Chatroom from './../components/Chatroom';

import styled from 'styled-components';
import { linearGradient } from 'polished';

const Home = () => {
    const { connected, connect } = useUser();
    const handleSubmit = useCallback(
        async username => {
            const valid = await connect(username);
            if (!valid) {
                return { username: 'This username is already taken.' };
            }
        },
        [connect]
    );

    return (
        <>
            <Head>
                <title>Chat App</title>
            </Head>
            <Main>
                {connected ? (
                    <Chatroom />
                ) : (
                    <LoginForm onSubmit={handleSubmit} />
                )}
            </Main>
        </>
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
