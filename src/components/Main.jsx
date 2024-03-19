import { SectionFilter } from "./SectionFilter"
import '../styles/main.css'
import { useThemeContext } from "../context/themeContext"
import { SectionCountries } from "./SectionCountries"

export const Main = () => {
    const {contextTheme, themeColors} = useThemeContext()

    return (
        <main className="main" id={contextTheme === 'light' ? themeColors.light1 : themeColors.dark1}>
            <SectionFilter></SectionFilter>
            <SectionCountries></SectionCountries>
        </main>
    )
}
