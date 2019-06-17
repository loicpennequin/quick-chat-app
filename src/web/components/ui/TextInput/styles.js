import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Input = styled.input`
    border-radius: 5px;
    border: solid 1px ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacing.xs};
    &:focus {
        outline: none;
    }
`;

export { Wrapper, Label, Input };
