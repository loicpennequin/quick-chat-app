// pages/_app.js
import React from 'react';
import initStore from './../store';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import theme from '../theme/index';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './../theme/GlobalStyle';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <>
                            <GlobalStyles />
                            <Component {...pageProps} />
                        </>
                    </ThemeProvider>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(initialState => initStore(initialState))(MyApp);
