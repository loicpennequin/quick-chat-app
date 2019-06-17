import React from 'react';
import { useField, useForm } from 'react-final-form-hooks';
import useMessages from '../../../hooks/useMessages';
import useUser from '../../../hooks/useUser';
import { Button, TextInput } from '../../ui';
import { Form, InputWrapper } from './styles';

const MessageForm = () => {
    const { sendPublicMessage } = useMessages();
    const { username } = useUser();

    const { form, handleSubmit } = useForm({
        onSubmit({ message }) {
            sendPublicMessage({ text: message, author: username });
        }
    });

    const message = useField('message', form);

    return (
        <Form onSubmit={handleSubmit}>
            <InputWrapper>
                <TextInput {...message.input} required autoComplete="off" />
            </InputWrapper>
            <Button type="submit" disabled={!message.input.value}>
                Send
            </Button>
        </Form>
    );
};

export default MessageForm;
