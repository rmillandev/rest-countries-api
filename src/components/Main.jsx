import { SectionFilter } from "./SectionFilter"
import '../styles/main.css'
import { useThemeContext } from "../context/themeContext"
import { useEffect, useState } from "react"
import { Card } from "./CardCountrie"
import { CountryInformation } from "./CountryInformation"

export const Main = () => {
    const {contextTheme, themeColors} = useThemeContext()
    const [showButton, setShowButton] = useState(false);
    const [searchInput, setSearchInput] = useState('')
    const [regionFilter, setRegionFilter] = useState('All')
    const [showCountryInformation, setShowCountryInformation] = useState({state: false, codeCountry: ''})

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

    const handleRegionFilter = (region) => setRegionFilter(region)

    return (
        <main className="main" id={contextTheme === 'light' ? themeColors.light1 : themeColors.dark1}>
            <SectionFilter onSearchinputChange={handleSearchInputChange} onClikRegionFilter={handleRegionFilter}></SectionFilter>
            <Card searchInput={searchInput} regionFilter={regionFilter} setShowCountryInformation={setShowCountryInformation}></Card>
            {
                showButton && (
                    <button className="arrow-top" id={contextTheme === 'light' ? themeColors.light1 : themeColors.dark1} onClick={scrollToTop}>⬆️</button>
                )
            }
            <CountryInformation showCountryInformation={showCountryInformation} setShowCountryInformation={setShowCountryInformation}></CountryInformation>
        </main>
    )
}
