import { ImportMetaEnv } from "@/vite-env";

export type ENVModes = "dev" | "prod" | "qa" | "uat";

export const env = {
  get: (variable: keyof ImportMetaEnv) => import.meta.env[variable.toString()], // returns the value of the given env variable.
  mode: import.meta.env.MODE as ENVModes, // Returns the environment file mode,
  dev: import.meta.env.DEV, // This is specific to Development Build despite of env modes.
  prod: import.meta.env.PROD, // This is specific to Production build despite of env modes.
};
