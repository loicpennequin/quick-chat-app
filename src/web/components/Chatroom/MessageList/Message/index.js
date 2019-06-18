import React from 'react';
import PropTypes from 'prop-types';
import constants from '../../../../../shared/constants';
import formatDate from '../../../../util/formatDate';
import { UserWrapper, SystemWrapper, Author } from './styles';

const messagePropTypes = {
    message: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
};

const Message = ({ message, id }) => {
    return message.author === constants.ROLES.SYSTEM ? (
        <SystemMessage message={message} id={id} />
    ) : (
        <UserMessage message={message} id={id} />
    );
};
Message.propTypes = messagePropTypes;

const UserMessage = ({ message: { timestamp, author, text }, id }) => (
    <UserWrapper id={id}>
        ({formatDate(timestamp)}) <Author>{author}</Author> : {text}
    </UserWrapper>
);
UserMessage.propTypes = messagePropTypes;

const SystemMessage = ({ message: { text }, id }) => (
    <SystemWrapper id={id}>{text}</SystemWrapper>
);
SystemMessage.propTypes = messagePropTypes;

export default Message;
