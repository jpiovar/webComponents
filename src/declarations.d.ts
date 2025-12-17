import 'react';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'custom-button': any;
            'custom-input': any;
        }
    }
}
