import 'react';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'custom-button': any;
            'custom-input': any;
        }
    }
}

declare module '*.css?inline' {
  const content: string;
  export default content;
}

declare module '*.scss?inline' {
  const content: string;
  export default content;
}
