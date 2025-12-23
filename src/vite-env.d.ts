declare module "*.css?inline" {
  const css: string;
  export default css;
}

declare module '*.css?inline' {
  const content: string;
  export default content;
}

declare module '*.scss?inline' {
  const content: string;
  export default content;
}