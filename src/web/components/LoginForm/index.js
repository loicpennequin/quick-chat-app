import React from 'react';
import PropTypes from 'prop-types';
import { useForm, useField } from 'react-final-form-hooks';
import TextInput from '../ui/TextInput/index';
import Button from '../ui/Button/index';
import { Wrapper, Form, InputWrapper, Error } from './styles';

const LoginForm = ({ onSubmit }) => {
    const { form, handleSubmit } = useForm({
        async onSubmit({ username }) {
            const errors = await onSubmit(username);
            return errors;
        }
    });
    const username = useField('username', form);

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit}>
                <InputWrapper>
                    <TextInput
                        label="Select your Username"
                        required
                        autoComplete="off"
                        {...username.input}
                    />
                </InputWrapper>
                {username.meta.submitError && (
                    <Error>{username.meta.submitError}</Error>
                )}
                <Button type="submit" disabled={!username.input.value}>
                    <span role="img" aria-label="nique sa mere l'a11y">
                        🚀
                    </span>
                    Connect
                </Button>
            </Form>
        </Wrapper>
    );
};
LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};
export default LoginForm;
