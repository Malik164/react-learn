
import withApi from "./HOC_Api/withApi"
import styles from "../App.module.css"
const CovidCard = props => {
    
    const {Countries}=props.data    
    return (
        <div>


            {Countries.map(country => {
                return(
                <div className={styles.covid_card} key={country['ID']}>
                    <h2>{country['Country']}</h2>
                    <h5>Total Cases: {country['TotalConfirmed']}</h5>
                    <h5>Total Deaths: {country['TotalDeaths']}</h5>
                    <h5>Recovered Cases: {country['TotalRecovered']}</h5>
                </div>
                )
            })}

        </div>
    )

}

const apiUrl = "https://api.covid19api.com/summary"

export default withApi(CovidCard, apiUrl)
