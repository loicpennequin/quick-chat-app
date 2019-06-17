import styled from 'styled-components';
import { Button } from '../ui';

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.foreground};
    display: grid;
    grid-template-columns: 1fr max-content;
    grid-template-rows: max-content 1fr max-content;
    width: 980px;
    height: 85vh;
    filter: drop-shadow(0 0 2em hsl(0, 0%, 0%, 0.3));
`;

const FullWidth = styled.div`
    grid-column: span 2;
`;

const LogoutButton = styled(Button)`
    margin-left: auto;
`;

const Header = styled(FullWidth)`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.md};
    border-bottom: solid 1px ${({ theme }) => theme.colors.primary};
`;

const Banner = styled.h1`
    margin: 0;
    padding-left: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.primary};
`;

export { Wrapper, FullWidth, LogoutButton, Header, Banner };
