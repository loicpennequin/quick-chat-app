import React from 'react';
import { BaseButton, DisabledButton } from './styles';
import PropTypes from 'prop-types';

const Button = ({ children, ...props }) => {
    if (props.disabled) {
        return <DisabledButton {...props}>{children}</DisabledButton>;
    }
    return <BaseButton {...props}>{children}</BaseButton>;
};
Button.propTypes = {
    disabled: PropTypes.bool
};

export default Button;
