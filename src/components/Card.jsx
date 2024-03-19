import { useThemeContext } from '../context/themeContext'
import { useFetch } from '../hooks/useFetch'
import '../styles/card.css'

export const Card = () => {
    const {contextTheme, themeColors} = useThemeContext()
    const { isLoading, data, errors } = useFetch('https://restcountries.com/v3.1/all')

    return (
        <>
            {
                isLoading
                    ? <h4>Cargando...</h4>
                    : errors
                        ? <p>Ha ocurrido un error</p>
                        : <div className='container'>
                            {
                                data.map((countrie, index) => {
                                    return (
                                        <article className="card" id={contextTheme === 'light' ? themeColors.light2 : themeColors.dark2} key={index}>
                                        <figure className="img-card">
                                            <img src={countrie.flags.png} alt={countrie.flags.alt} />
                                        </figure>
                                        <div className="information-card">
                                            <p className="name-countrie">{countrie.name.official}</p>
                                            <p className="population-countrie">Population: <span>{countrie.population.toLocaleString()}</span></p>
                                            <p className="region-countrie">Region: <span>{countrie.region}</span></p>
                                            <p className="capital-countrie">Capital: <span>{countrie.capital}</span></p>
                                        </div>
                                    </article>
                                    )
                                })
                            }
                        </div>
            }
        </>
    )
}
