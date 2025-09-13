declare module 'react' {
  export function useState<T>(initial: T): [T, (v: T) => void];
  const React: any;
  export default React;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
