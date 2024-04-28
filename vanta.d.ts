// Explicit declaration for the Vanta.js module
declare module 'vanta/dist/vanta.topology.min.js' {
    export = VANTA;
  }
  
  declare global {
    interface Window {
      VANTA?: any;
    }
  }
  
  export {};
  