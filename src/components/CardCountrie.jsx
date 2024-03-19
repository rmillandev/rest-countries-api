/* eslint-disable react/prop-types */
import { useThemeContext } from '../context/themeContext'
import { useFetch } from '../hooks/useFetch'
import '../styles/card.css'

export const Card = ({searchInput}) => {
    const { contextTheme, themeColors } = useThemeContext()
    const { isLoading, data, errors } = useFetch('https://restcountries.com/v3.1/all')

    const filteredCountries = data?.filter(cuntry => cuntry.name.official.toLowerCase().includes(searchInput.toLowerCase().trim()))

    return (
        <>
            <section className="section-countries">
            {
                isLoading
                    ? <h4>Cargando...</h4>
                    : errors
                        ? <p>Ha ocurrido un error</p>
                        : <div className='container'>
                            {
                                filteredCountries.map((country, index) => {
                                    return (
                                        <article className="card" id={contextTheme === 'light' ? themeColors.light2 : themeColors.dark2} key={index}>
                                            <figure className="img-card">
                                                <img src={country.flags.png} alt={country.flags.alt} />
                                            </figure>
                                            <div className="information-card">
                                                <p className="name-country">{country.name.official}</p>
                                                <p className="population-country">Population: <span>{country.population.toLocaleString()}</span></p>
                                                <p className="region-country">Region: <span>{country.region}</span></p>
                                                <p className="capital-country">Capital: <span>{country.capital}</span></p>
                                            </div>
                                        </article>
                                    )
                                })
                            }
                        </div>
            }
            </section>
        </>
    )
}
