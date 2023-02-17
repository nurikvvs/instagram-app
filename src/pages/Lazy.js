import React from "react";

// AUTH PAGES
export const Register = React.lazy(() => import("../apps/auth/register/Register"));
export const Login = React.lazy(() => import("../apps/auth/login/Login"));

export const AuthPages = {
    Register,
    Login 
};

// LAYOUT PAGES

const Home = React.lazy(() => import("../apps/layout/home/Home"));

export const LayoutPages = {
    Home
}