import React from 'react';
import { TextInput } from '@carbon/react';
import './CustomInput.scss';

interface CustomInputProps {
    id: string;
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
    disabled?: boolean;
    error?: string;
    required?: boolean;
    helperText?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
    id,
    label,
    placeholder,
    value,
    onChange,
    type = 'text',
    disabled = false,
    error,
    helperText,
    required,
    ...rest
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <TextInput
            id={id}
            labelText={label || ''}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            type={type}
            disabled={disabled}
            invalid={!!error}
            invalidText={error}
            helperText={helperText}
            className="custom-input"
            required={required}
            {...rest}
        />
    );
};
