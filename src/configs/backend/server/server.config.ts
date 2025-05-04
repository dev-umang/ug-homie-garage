import axios from "axios";

export const APIEndpoints = ["/garages"] as const;
export const APIVersions = ["/v1", "/v2", "/v3"] as const;
export type ApiPath =
  | `${(typeof APIVersions)[number]}${(typeof APIEndpoints)[number]}`
  | (typeof APIEndpoints)[number];

export const SERVERS = {
  garage: axios.create({
    baseURL: import.meta.env.VITE_SERVER_GARAGE,
  }),
};

export type ServerKey = keyof typeof SERVERS;
