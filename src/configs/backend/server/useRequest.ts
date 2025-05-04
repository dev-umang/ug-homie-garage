import { AxiosError, RawAxiosRequestHeaders } from "axios";
import { useCallback } from "react";
import { fbAuth } from "../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { useNav } from "@common/hooks";
import { ApiPath, SERVERS, ServerKey } from "./server.config";

const useRequest = (globalServerKey: ServerKey = "garage") => {
  const nav = useNav();

  const request = useCallback(
    async <T>(
      method: "get" | "post" | "delete" | "put" | "patch",
      path: ApiPath,
      body?: object,
      options?: { params?: string[]; arguments?: { [k: string]: string } },
    ): Promise<{ data?: T | null; error?: boolean }> => {
      try {
        let url = path;
        for (const p of options?.params ?? []) url += `/${p}`;
        const headers: RawAxiosRequestHeaders = {
          Authorization: "Bearer token",
        };

        const server = SERVERS[globalServerKey ?? "garage"];
        const res = await server[method](url, body, { headers });
        return { data: res.data as T, error: false };
      } catch (error) {
        console.error(error);
        const err = error as unknown as AxiosError;
        if (err.status === 401) signOut(fbAuth).then(() => nav("/auth/login"));
        return { data: null, error: true };
      }
    },
    [globalServerKey, nav],
  );

  return request;
};

export default useRequest;
