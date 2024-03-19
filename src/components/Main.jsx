import { SectionFilter } from "./SectionFilter"
import '../styles/main.css'
import { useThemeContext } from "../context/themeContext"
import { useEffect, useState } from "react"
import { Card } from "./CardCountrie"

export const Main = () => {
    const {contextTheme, themeColors} = useThemeContext()
    const [showButton, setShowButton] = useState(false);
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const handleSearchInputChange = (value) => setSearchInput(value)

    return (
        <main className="main" id={contextTheme === 'light' ? themeColors.light1 : themeColors.dark1}>
            <SectionFilter onSearchinputChange={handleSearchInputChange}></SectionFilter>
            <Card searchInput={searchInput}></Card>
            {
                showButton && (
                    <button className="arrow-top" id={contextTheme === 'light' ? themeColors.light1 : themeColors.dark1} onClick={scrollToTop}>⬆️</button>
                )
            }
        </main>
    )
}
