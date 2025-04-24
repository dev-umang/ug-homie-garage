import { FC } from "react";
import { RouteObject } from "react-router-dom";
import {
  AuthLayout,
  GetStartedLayout,
  GlobalLayout,
  MainLayout,
} from "@app/layouts";
import { _404Page } from "@modules/404";
import { ForgotPasswordPage, SignInPage } from "@modules/auth";
import { DashboardPage } from "@modules/dashboard";
import { InitAddGaragePage, WelcomePage } from "@modules/getStarted";
import { SplashPage } from "@modules/splash";

// List of URL paths that our application supports.
export const Paths = [
  "/",
  "/auth/login",
  "/auth/forgot-password",
  "/dashboard",
  "/get-started/welcome",
  "/get-started/add-garage",
] as const;

export type Path = (typeof Paths)[number]; // Exported type of Paths for auto completion.

// Returns dynamic paths according to given parameters for specific module
export const Href = {};

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
  r(_404Page, "*"),
  r(AuthLayout, [
    r(SignInPage, "/auth/login"),
    r(ForgotPasswordPage, "/auth/forgot-password"),
  ]),
  r(GlobalLayout, [
    r(SplashPage, "/"),
    r(GetStartedLayout, [
      r(WelcomePage, "/get-started/welcome"),
      r(InitAddGaragePage, "/get-started/add-garage"),
    ]),
    r(MainLayout, [
      r(DashboardPage, "/dashboard"),
      r(WelcomePage, "/dashboard"),
    ]),
  ]),
];
