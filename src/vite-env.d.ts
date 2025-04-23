/// <reference types="vite-plugin-pwa/react" />
/// <reference types="vite/client" />

interface ViteTypeOptions {
  // By adding this line, you can make the type of ImportMetaEnv strict
  // to disallow unknown keys.
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
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
