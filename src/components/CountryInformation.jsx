/* eslint-disable react/prop-types */
import { useThemeContext } from '../context/themeContext'
import { useFetch } from '../hooks/useFetch'
import '../styles/card.css'

export const CountryInformation = ({ showCountryInformation, setShowCountryInformation }) => {
    const { contextTheme, themeColors } = useThemeContext()
    const { state, codeCountry } = showCountryInformation

    const code = codeCountry !== '' ? codeCountry : 'co'
    
    const { isLoading, data, errors } = useFetch(`https://restcountries.com/v3.1/alpha/${code}`)
    console.log(data)
    const handleClickBtnBack = () => {
        setShowCountryInformation({ state: false, codeCountry: '' })
        document.body.classList.remove("scroll-none")
    }
    return (
        <section className={`container-information ${state ? 'visible' : ''}`} id={contextTheme === 'light' ? themeColors.light1 : themeColors.dark1}>
            <button className="btn-back" onClick={handleClickBtnBack}><i className="fa-solid fa-arrow-left"></i> Back</button>
            {
                isLoading
                    ? <h4>Cargando...</h4>
                    : errors
                        ? <p>Ha ocurrido un error: {errors}</p>
                        : data?.map(country => {
                            return (
                                <article key={1}>
                                    <figure>
                                        <img src={country.flags.png} alt={country.flags.alt} />
                                    </figure>
                                    <div className="box-information">
                                        <h2>{country.name.official}</h2>
                                        <ul>
                                            <li>Native Name: <span>{Object.values(country.name.nativeName)[0].common}</span></li>
                                            <li>Population: <span>{country.population.toLocaleString()}</span></li>
                                            <li>Region: <span>{country.region}</span></li>
                                            <li>Sub Region: <span>{country.subregion}</span></li>
                                            <li>Capital: <span>{country.capital[0]}</span></li>
                                        </ul>
                                        <ul>
                                            <li>Top Level Domain: <span>{country.tld[0]}</span></li>
                                            <li>Currencies: <span>{Object.values(country.currencies)[0].name}</span></li>
                                            <li>Languages:
                                                <span>
                                                    {
                                                        Object.values(country.languages).map((language, index) => <span key={index}>{language}{index !== Object.values(country.languages).length - 1 ? ', ' : ''}</span>)
                                                    }
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="border-countries">
                                            <p>Border Countries:</p>
                                            <div className="group-border">
                                                {
                                                    country.borders?.length >= 1
                                                    ? Object.values(country.borders).map((border, index) => <button key={index}>{border}</button>)
                                                    : <p>N/A</p>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            )
                        })
            }
        </section>
    )
}
