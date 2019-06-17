import React from 'react';
import PropTypes from 'prop-types';
import constants from '../../../../../shared/constants';
import formatDate from '../../../../util/formatDate';
import { UserWrapper, SystemWrapper, Author } from './styles';

const messagePropTypes = {
    message: PropTypes.object.isRequired
};

const Message = ({ message }) => {
    return message.author === constants.ROLES.SYSTEM ? (
        <SystemMessage message={message} />
    ) : (
        <UserMessage message={message} />
    );
};
Message.propTypes = messagePropTypes;

const UserMessage = ({ message: { timestamp, author, text } }) => (
    <UserWrapper>
        ({formatDate(timestamp)}) <Author>{author}</Author> : {text}
    </UserWrapper>
);
UserMessage.propTypes = messagePropTypes;

const SystemMessage = ({ message: { text } }) => (
    <SystemWrapper>{text}</SystemWrapper>
);
SystemMessage.propTypes = messagePropTypes;

export default Message;
