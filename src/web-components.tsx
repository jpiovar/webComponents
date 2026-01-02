import React from 'react';
import r2wc from '@r2wc/react-to-web-component';
import { CustomButton } from './components/CustomButton/CustomButton';
import { CustomInput } from './components/CustomInput/CustomInput';

console.log('--- WEB-COMPONENTS.TSX STARTING ---');
// alert('WEB-COMPONENTS.TSX EXECUTING');
// @ts-ignore: CSS raw import has no type declarations
import carbonStyles from '@carbon/styles/css/styles.css?raw';
console.log('Carbon Styles length:', carbonStyles?.length);

// const withCarbonStyles = (Component: React.ComponentType<any>) => {
//     return (props: any) => {
//         return (
//             <div className="cds--body" style={{ display: 'contents' }}>
//                 <style dangerouslySetInnerHTML={{
//                     __html: `
//                     :host { display: block !important; border: 10px solid green !important; min-height: 50px !important; }
//                     button { background: red !important; border: 5px solid blue !important; color: white !important; font-size: 20px !important; }
//                     ${carbonStyles}
//                 ` }} />
//                 <Component {...props} />
//             </div>
//         );
//     };
// };

const withCarbonStyles = (Component: React.ComponentType<any>) => {
    return (props: any) => {
        return (
            /* Change 'cds--body' to 'cds--g10' (White/Light) or 'cds--g100' (Dark) */
            <div className="cds--g10" style={{ display: 'contents' }}>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    :host { 
                        display: block !important; 
                    }
                    /* This ensures the wrapper div inherits the theme variables */
                    .cds--g10 {
                        color: var(--cds-text-primary);
                        background-color: var(--cds-background);
                    }
                    ${carbonStyles}
                ` }} />
                <Component {...props} />
            </div>
        );
    };
};



const WrappedCustomButton = withCarbonStyles(CustomButton);
const WrappedCustomInput = withCarbonStyles(CustomInput);

// Register <custom-button>
export const CustomButtonWC = r2wc(WrappedCustomButton, {
    props: {
        variant: 'string',
        content: 'string',
        size: 'string',
        disabled: 'boolean',
        type: 'string',
        iconDescription: 'string',
    },
});

customElements.define('custom-button', CustomButtonWC);

// Register <custom-input>
export const CustomInputWC = r2wc(WrappedCustomInput, {
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
});

customElements.define('custom-input', CustomInputWC);

