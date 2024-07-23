
import styles from './Countrydata.module.css';
import Countrydata from '../Countrydata'
function Countrycards({ search }) {
    return (
        <div className={styles.box}>
            {
                Countrydata.filter((country) => country.name.official.toLowerCase().includes(search)).map((country, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.image}>
                            <img src={country.flags.png} alt='' />
                        </div>
                        <p className={styles.name}>{country.name.official}</p>
                        <div className={styles.details}>
                            <p><span>Population</span>{country.population.toLocaleString('en-IN')}</p>
                            <p><span>Region</span>{country.region}</p>
                            <p><span>Capital</span>{country.capital}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Countrycards
