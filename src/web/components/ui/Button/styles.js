import styled from 'styled-components';

const getColor = ({ secondary, theme }) =>
    theme.colors[secondary ? 'secondary' : 'primary'];

const BaseButton = styled.button`
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
    text-transform: uppercase;
    background-color: transparent;
    color: ${props => getColor(props)};
    border: solid 2px ${props => getColor(props)};
    border-radius: 8px;
    &:hover,
    &:focus {
        border-color: transparent;
        background-color: ${props => getColor(props)};
        color: ${({ theme }) => theme.colors.textInvert};
    }
`;

const DisabledButton = styled(BaseButton)`
    background-color: var(--grey);
    color: var(--darkgrey);
    opacity: 0.5;
    border-color: transparent;
    &:hover,
    &:focus {
        background-color: var(--grey);
        color: var(--darkgrey);
    }
`;

export { BaseButton, DisabledButton };
