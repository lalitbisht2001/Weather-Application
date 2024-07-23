import styles from "./Main.module.css";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
function Searchbar({ Mode, getData }) {
    return (
        <div className={styles.searchbar}>
            <div className={styles.logobox} style={{ backgroundColor: Mode ? "white" : "hsl(209, 23%, 22%)" }}>
                <SearchTwoToneIcon className={styles.logo} />
            </div>
            <input type="text" onChange={getData} placeholder="Search for a country..." style={{ backgroundColor: Mode ? "white" : "hsl(209, 23%, 22%)" }} />
        </div>
    )
}

export default Searchbar
