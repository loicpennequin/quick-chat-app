import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Label, Input } from './styles';

const TextInput = ({ label, type = 'text', ...props }) => {
    return (
        <Wrapper>
            {label && <Label>{label}</Label>}
            <Input type="text" {...props} />
        </Wrapper>
    );
};
TextInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string
};

export default TextInput;
