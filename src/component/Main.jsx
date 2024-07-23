import { useState } from "react";
import Countrycards from "./Countrycards";
import styles from "./Main.module.css";
import Searchbar from "./Searchbar";
import Filter from "./Filter";
function Main({ Mode }) {
    const [search, setSearch] = useState('');

    const getData = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }
    return (
        <div className={styles.main} style={{ backgroundColor: Mode ? "" : "#hsl(199.99999999999994, 3.370786516853929%, 17.45098039215686%)" }}>
            <div className={styles.box1}>
                <Searchbar getData={getData} Mode={Mode} search={search} />
                <Filter Mode={Mode} />
            </div>
            <Countrycards search={search} />
        </div>
    )
}

export default Main;
