import styled from 'styled-components';

const Wrapper = styled.ul`
    overflow-y: auto;
    margin: 0;
    padding: ${({ theme }) => theme.spacing.md} 0;
`;

export { Wrapper };
