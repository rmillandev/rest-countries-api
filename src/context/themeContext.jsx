import { createContext, useContext, useEffect, useMemo, useState } from "react"
import PropTypes from 'prop-types'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const darkModeOptions = {
        dark1: "dark-mode-bg",
        dark2: "dark-mode-elements"
    }

    const lightModeOptions = {
        light1: "light-mode-bg",
        light2: "light-mode-elements"
    }

    const [contextTheme, setContextTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme")
        // Si no hay un tema guardado, devuelve light
        return savedTheme || "light"
    })

    // Cuando el tema cambia, actualiza el valor en el almacenamiento local
    useEffect(() => {
        localStorage.setItem("theme", contextTheme)
    }, [contextTheme])

    const themeColors = useMemo(() => {
        return contextTheme === "dark" ? darkModeOptions : lightModeOptions
    }, [contextTheme])

    const values = useMemo(() => {
        return {
            contextTheme, setContextTheme, themeColors
        }
    }, [contextTheme, themeColors])

    return (
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    )
}

ThemeContextProvider.propTypes = {
    children: PropTypes.object
}

export function useThemeContext() {
    return useContext(ThemeContext)
}