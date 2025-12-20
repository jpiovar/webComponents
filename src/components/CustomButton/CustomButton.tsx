import React from 'react';
import { Button } from '@carbon/react';
import './CustomButton.scss';

interface CustomButtonProps {
    content?: React.ReactNode;
    children?: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    renderIcon?: React.ComponentType;
    iconDescription?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
    content,
    children,
    onClick,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    type = 'button',
    renderIcon,
    iconDescription,
    ...rest
}) => {
    // Map custom variant to Carbon kind
    const carbonKind = variant === 'outline' ? 'tertiary' : variant;

    // Map custom size to Carbon size
    const carbonSize = size === 'medium' ? 'md' : size === 'large' ? 'lg' : 'sm';

    return (
        <Button
            kind={carbonKind}
            size={carbonSize}
            onClick={onClick}
            disabled={disabled}
            type={type}
            renderIcon={renderIcon}
            iconDescription={iconDescription}
            {...rest}
        >
            {content || children}
        </Button>
    );
};
