import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Form = styled.form`
    padding: ${({ theme }) => theme.spacing.lg};
    background-color: ${({ theme }) => theme.colors.foreground};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const InputWrapper = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export { Wrapper, Form, InputWrapper };
