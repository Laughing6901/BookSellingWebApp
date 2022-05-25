import React, { useEffect, useState } from 'react'
import { Switch } from 'antd';

export default function DarkMode(props) {
    const {onChangeTheme} = props

    const [themeState, changeThemeState] = useState(localStorage.getItem('themeOption'))
    useEffect(() => {
        onChangeTheme(themeState)
    }, [themeState])

    const body = document.body
    const lightTheme = 'light';
    const darkTheme = 'dark';
    let theme 

    if (localStorage) {
        theme = localStorage.getItem('themeOption')
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)
    }
    else {
        body.classList.add(lightTheme)
        localStorage.setItem('themeOption', 'light')
    }

    const switchTheme = () => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme)
            localStorage.setItem('themeOption', 'light')
            theme = lightTheme
        }
        else {
            body.classList.replace(lightTheme, darkTheme)
            localStorage.setItem('themeOption', 'dark')
            theme = darkTheme
        }
    }
    return (
        <Switch
            checked={theme === darkTheme}
            onClick={switchTheme}
            onChange={(value) => {
                changeThemeState(value ? 'dark' : 'light')
            }}
        />
    )
}
