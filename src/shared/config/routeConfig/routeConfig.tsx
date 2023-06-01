import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";


export enum AppRouts {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRouts, string> = {
    [AppRouts.MAIN]: '/',
    [AppRouts.ABOUT]: '/about'
}

export const routeCongig: Record<AppRouts, RouteProps> = {
    [AppRouts.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRouts.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    }
}