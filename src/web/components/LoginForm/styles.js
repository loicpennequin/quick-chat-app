import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Form = styled.form`
    padding: ${({ theme }) => theme.spacing.lg};
    width: 250px;
    background-color: ${({ theme }) => theme.colors.foreground};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const Error = styled.p`
    color: ${({ theme }) => theme.colors.secondary};
`;
const InputWrapper = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    width: 100%;
`;

export { Wrapper, Form, InputWrapper, Error };
