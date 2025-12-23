import React from 'react';
import r2wc from '@r2wc/react-to-web-component';
import { CustomButton } from './components/CustomButton/CustomButton';
import { CustomInput } from './components/CustomInput/CustomInput';
// @ts-ignore: CSS inline import has no type declarations
import carbonStyles from '@carbon/styles/css/styles.css?inline';

const withCarbonStyles = (Component: React.ComponentType<any>) => {
    return (props: any) => {
        return (
            <>
                <style>{carbonStyles}</style>
                <Component {...props} />
            </>
        );
    };
};

const WrappedCustomButton = withCarbonStyles(CustomButton);
const WrappedCustomInput = withCarbonStyles(CustomInput);

// Register <custom-button>
const CustomButtonWC = r2wc(WrappedCustomButton, {
    props: {
        variant: 'string',
        content: 'string',
        size: 'string',
        disabled: 'boolean',
        type: 'string',
        iconDescription: 'string',
    },
    shadow: 'open',
});

customElements.define('custom-button', CustomButtonWC);

// Register <custom-input>
const CustomInputWC = r2wc(WrappedCustomInput, {
    props: {
        id: 'string',
        label: 'string',
        placeholder: 'string',
        value: 'string',
        type: 'string',
        disabled: 'boolean',
        error: 'string',
        helperText: 'string',
        required: 'boolean',
    },
    shadow: 'open',
});

customElements.define('custom-input', CustomInputWC);
