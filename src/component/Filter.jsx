import styles from "./Main.module.css";

function Filter({Mode}) {
    return (
        <div className={styles.filter}>
            <select style={{ backgroundColor: Mode ? "white" : "hsl(209, 23%, 22%)", color: !Mode ? "white" : "hsl(209, 23%, 22%)" }} >
                <option>Filter By Region</option>
                <option value="">Africa</option>
                <option value="">America</option>
                <option value="">Asia</option>
                <option value="">Europe</option>
                <option value="">Oceania</option>
            </select>
        </div>
    )
}

export default Filter
