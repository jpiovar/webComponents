/// <reference types="react" />

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "custom-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                variant?: string;
                size?: string;
                disabled?: boolean;
                type?: string;
                iconDescription?: string;
            };
            "custom-input": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                id?: string;
                label?: string;
                placeholder?: string;
                value?: string;
                type?: string;
                disabled?: boolean;
                error?: string;
                helperText?: string;
            };
        }
    }
}

