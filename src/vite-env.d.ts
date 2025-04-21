/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/react" />

export interface ImportMetaEnv {
  readonly VITE_PORT: string;
  readonly VITE_apiKey: string;
  readonly VITE_authDomain: string;
  readonly VITE_databaseURL: string;
  readonly VITE_projectId: string;
  readonly VITE_storageBucket: string;
  readonly VITE_messagingSenderId: string;
  readonly VITE_appId: string;
  readonly VITE_NODE_PREFIX: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
