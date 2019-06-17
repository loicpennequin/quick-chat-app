import styled from 'styled-components';

const BaseWrapper = styled.div`
    padding: ${({ theme }) => theme.spacing.xs};
`;

const SystemWrapper = styled(BaseWrapper)`
    color: var(--grey);
    font-style: italic;
`;

const UserWrapper = styled(BaseWrapper)``;

const Author = styled.span`
    font-weight: bold;
`;

export { SystemWrapper, UserWrapper, Author };
