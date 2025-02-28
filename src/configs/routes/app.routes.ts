import { FC } from "react";
import { RouteObject } from "react-router-dom";
import { AccountLayout, NestedLayout, TabsLayout } from "@app/layouts";
import { SearchFields } from "@common/hooks/useSearch";
import { _404Page } from "@modules/404";
import { GaragesPage } from "@modules/garages";
import { ProfilePage } from "@modules/profile";
import { SettingsPage } from "@modules/settings";
import { SplashPage } from "@modules/splash";
import { AddVehiclePage, VehiclesPage } from "@modules/vehicles";

// List of URL paths that our application supports.
export const Paths = [
  "/",
  "/garages",
  "/account/profile",
  "/account/settings",
  "/garage/:garageId/vehicles",
  "/vehicles/:vehicleId",
  "/vehicles",
  "/vehicles/add",
] as const;

export type Path = (typeof Paths)[number]; // Exported type of Paths for auto completion.

// Returns dynamic paths according to given parameters for specific module
export const Href = {
  addVehicle: (params: { [k in SearchFields]?: string }) => {
    let _path = `/vehicles/add`,
      i = 0;
    for (const key in params) {
      const val = params[key as SearchFields];
      _path = i === 0 ? `${_path}?${key}=${val}` : `${_path}&${key}=${val}`;
      i++;
    }
    return _path;
  },
};

// Returns a route object to map that particular
const r = (
  Component: FC,
  extra: Path | undefined | "*" | RouteObject[] = undefined,
): RouteObject => ({
  path: typeof extra === "string" ? extra : undefined,
  Component,
  children: typeof extra === "object" ? extra : undefined,
});

// Application router configuration. Path to component mapping
export const AppRoutes: RouteObject[] = [
  // r(GlobalLayout, [
  r(_404Page, "*"),
  r(SplashPage, "/"),
  r(TabsLayout, [
    r(GaragesPage, "/garages"),
    r(AccountLayout, [
      r(ProfilePage, "/account/profile"),
      r(SettingsPage, "/account/settings"),
    ]),
  ]),
  r(NestedLayout, [
    r(VehiclesPage, "/vehicles"),
    r(AddVehiclePage, "/vehicles/add"),
  ]),
  // r(MainLayout) // Selected Vehicle Layout
  // ]),
];
