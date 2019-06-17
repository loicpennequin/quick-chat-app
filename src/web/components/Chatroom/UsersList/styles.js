import styled from 'styled-components';

const Wrapper = styled.ul`
    width: 22ch;
    overflow-y: auto;
    border-left: solid 1px ${({ theme }) => theme.colors.primary};
    margin: 0;
`;

const Item = styled.li`
    border-bottom: solid 1px ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacing.sm};
`;

export { Wrapper, Item };
