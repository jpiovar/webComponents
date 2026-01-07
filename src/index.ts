// Side-effect: auto-register custom elements
export * from './web-components';

// Named exports for React components
export * from './components/CustomButton/CustomButton';
export * from './components/CustomInput/CustomInput';

// Named exports for web component classes
export { CustomButtonWC, CustomInputWC } from './web-components';

// Tag name constants
export const CUSTOM_BUTTON_TAG = 'custom-button';
export const CUSTOM_INPUT_TAG = 'custom-input';
