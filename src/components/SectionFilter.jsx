/* eslint-disable react/prop-types */
import { useState } from "react"
import { useThemeContext } from "../context/themeContext"


export const SectionFilter = ({onSearchinputChange, onClikRegionFilter}) => {
    const {contextTheme, themeColors} = useThemeContext()
    const [showFilter, setShowFilter] = useState(false)
    
    const handleShowFilter = () => setShowFilter(!showFilter)

    const handleClickRegion = (region) => {
        onClikRegionFilter(region)
        setShowFilter(false)
    }

    return (
        <section className="section-filter"> 
            <div className="container">
                <div className="box-search"  id={contextTheme === 'light' ? themeColors.light2 : themeColors.dark2}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" className="input-search" placeholder="Search for a country..." 
                    onChange={(e) => onSearchinputChange(e.target.value)}
                    id={contextTheme === 'light' ? themeColors.light2 : themeColors.dark2} />
                </div>
                <div className="box-filter"  >
                    <div onClick={handleShowFilter} id={contextTheme === 'light' ? themeColors.light2 : themeColors.dark2}>
                        <p>Filter By Region</p>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <ul className={`regions ${showFilter ? 'visible' : ''}`} id={contextTheme === 'light' ? themeColors.light2 : themeColors.dark2}>
                        <li className="filter-region" onClick={() => handleClickRegion('All')}>All</li>
                        <li className="filter-region" onClick={() => handleClickRegion('Africa')}>Africa</li>
                        <li className="filter-region" onClick={() => handleClickRegion('Americas')}>America</li>
                        <li className="filter-region" onClick={() => handleClickRegion('Asia')}>Asia</li>
                        <li className="filter-region" onClick={() => handleClickRegion('Europe')}>Europe</li>
                        <li className="filter-region" onClick={() => handleClickRegion('Oceania')}>Oceania</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}