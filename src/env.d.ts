// <reference types="vite/client" />

// interface ImportMetaEnv {
//   readonly VITE_APP_TITLE: string
//   // more env variables...
// }

interface ImportMeta {
  readonly env: ImportMetaEnv
}
interface ImportMetaEnv {
  readonly VITE_IEX_TOKEN: string
  // more env variables...
}