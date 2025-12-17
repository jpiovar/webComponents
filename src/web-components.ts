import r2wc from '@r2wc/react-to-web-component';
import { CustomButton } from './components/CustomButton/CustomButton';
import { CustomInput } from './components/CustomInput/CustomInput';

// Register <custom-button>
const CustomButtonWC = r2wc(CustomButton, {
    props: {
        variant: 'string',
        size: 'string',
        disabled: 'boolean',
        type: 'string',
        iconDescription: 'string',
    },
    // shadow: "open", // Use Light DOM to inherit Carbon styles
});

customElements.define('custom-button', CustomButtonWC);

// Register <custom-input>
const CustomInputWC = r2wc(CustomInput, {
    props: {
        id: 'string',
        label: 'string',
        placeholder: 'string',
        value: 'string',
        type: 'string',
        disabled: 'boolean',
        error: 'string',
        helperText: 'string',
    },
    // shadow: "open", // Light DOM for Carbon styles
});

customElements.define('custom-input', CustomInputWC);
