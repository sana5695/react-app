import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";

const ThemeProvider:FC = ({children}) => {

    const deafultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

    const [theme, setTheme] = useState<Theme>(deafultTheme)


    const deafultProps = useMemo(() => ({
            theme: theme,
            setTheme: setTheme}),
        [theme])

    return (
        <ThemeContext.Provider value={deafultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;