# @plantandgo/web-components

Custom web components built with React, Carbon Design System, and packaged for use in any project.

## 📦 Installation

```bash
npm install @plantandgo/web-components
```

## 🚀 Quick Start

### Step 1: Import the Package

In your project's main entry file (e.g., `main.js`, `main.ts`, or `App.jsx`):

```javascript
import '@plantandgo/web-components';
```

That's it! The custom elements are now registered globally and ready to use.

### Step 2: Use the Components

#### In HTML

```html
<custom-button variant="primary" content="Click me"></custom-button>
<custom-input id="email" label="Email Address" placeholder="Enter your email"></custom-input>
```

#### In React/JSX

```jsx
function MyComponent() {
  return (
    <div>
      <custom-button 
        variant="primary" 
        content="Submit"
      />
      <custom-input 
        id="username"
        label="Username"
        placeholder="Enter username"
      />
    </div>
  );
}
```

#### In Vue

```vue
<template>
  <div>
    <custom-button variant="primary" content="Click me"></custom-button>
    <custom-input id="email" label="Email" placeholder="Enter email"></custom-input>
  </div>
</template>

<script>
import '@plantandgo/web-components';

export default {
  name: 'MyComponent'
}
</script>
```

## 📚 Complete Step-by-Step Guide

### For a New React + Vite Project

1. **Create a new Vite project**
   ```bash
   npm create vite@latest my-app -- --template react
   cd my-app
   ```

2. **Install the web components package**
   ```bash
   npm install @plantandgo/web-components
   ```

3. **Import in your `src/main.jsx` or `src/App.jsx`**
   ```javascript
   import '@plantandgo/web-components';
   ```

4. **Use the components in your JSX**
   ```jsx
   // src/App.jsx
   import '@plantandgo/web-components';
   
   function App() {
     return (
       <div>
         <h1>My App</h1>
         <custom-button variant="primary" content="Get Started" />
         <custom-input 
           id="email" 
           label="Email" 
           placeholder="you@example.com"
         />
       </div>
     );
   }
   
   export default App;
   ```

5. **Run your project**
   ```bash
   npm run dev
   ```

### For an Existing Project

1. **Install the package**
   ```bash
   npm install @plantandgo/web-components
   ```

2. **Import in your entry file** (e.g., `index.js`, `main.js`, or `App.jsx`)
   ```javascript
   import '@plantandgo/web-components';
   ```

3. **Use the components** anywhere in your HTML/JSX

### For Plain HTML Projects

1. **Install via npm** (or use a CDN)
   ```bash
   npm install @plantandgo/web-components
   ```

2. **Include in your HTML**
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <title>My App</title>
   </head>
   <body>
     <h1>My App</h1>
     <custom-button variant="primary" content="Click me"></custom-button>
     
     <script type="module">
       import '@plantandgo/web-components';
     </script>
   </body>
   </html>
   ```

## 🎨 Available Components

### `<custom-button>`

A customizable button component with Carbon Design System styling.

**Attributes:**
- `variant`: `'primary' | 'secondary' | 'outline' | 'danger'` (default: `'primary'`)
- `content`: Button text
- `size`: `'small' | 'medium' | 'large'` (default: `'medium'`)
- `disabled`: Boolean
- `type`: `'button' | 'submit' | 'reset'` (default: `'button'`)

**Examples:**
```html
<custom-button variant="primary" content="Submit"></custom-button>
<custom-button variant="secondary" content="Cancel"></custom-button>
<custom-button variant="danger" content="Delete" disabled></custom-button>
```

### `<custom-input>`

A text input component with Carbon Design System styling.

**Attributes:**
- `id`: Input ID (required)
- `label`: Label text
- `placeholder`: Placeholder text
- `value`: Input value
- `type`: `'text' | 'email' | 'password' | 'number' | 'tel' | 'url'` (default: `'text'`)
- `disabled`: Boolean
- `error`: Error message to display
- `helperText`: Helper text below input
- `required`: Boolean

**Examples:**
```html
<custom-input 
  id="email" 
  label="Email Address" 
  type="email"
  placeholder="you@example.com"
  required
></custom-input>

<custom-input 
  id="password" 
  label="Password" 
  type="password"
  helperText="Must be at least 8 characters"
></custom-input>
```

## 💻 TypeScript Support

This package includes full TypeScript type definitions!

### Import Types and Constants

```typescript
import { 
  CustomButtonWC, 
  CustomInputWC,
  CUSTOM_BUTTON_TAG,
  CUSTOM_INPUT_TAG,
  CustomButton,
  CustomInput
} from '@plantandgo/web-components';

// Use tag constants
const button = document.createElement(CUSTOM_BUTTON_TAG);

// TypeScript will provide autocomplete for all attributes!
```

### JSX Type Declarations

The package automatically extends JSX.IntrinsicElements, so you get full autocomplete in React/TSX files:

```tsx
// TypeScript knows about these elements!
<custom-button variant="primary" content="Click" />
<custom-input id="email" label="Email" type="email" />
```

## 🛠️ Development

### Build the Package

```bash
npm run build:wc
```

### Publish a New Version

```bash
# Patch version (2.1.9 -> 2.1.10)
npm run release:patch

# Minor version (2.1.9 -> 2.2.0)
npm run release:minor

# Major version (2.1.9 -> 3.0.0)
npm run release:major
```

## 📝 License

MIT
