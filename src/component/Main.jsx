import { useState } from "react";
import Countrycards from "./Countrycards";
import styles from "./Main.module.css";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
function Main({ Mode }) {
    const [search , setSearch] = useState('');

    const getData = (e) =>{
        e.preventDefault();
        setSearch(e.target.value);
        // console.log(search);
    }
    return (
        <div className={styles.main} style={{ backgroundColor: Mode ? "" : "#hsl(199.99999999999994, 3.370786516853929%, 17.45098039215686%)" }}>
            <div className={styles.box1}>
                <div className={styles.searchbar}>
                    <div className={styles.logobox} style={{ backgroundColor: Mode ? "white" : "hsl(209, 23%, 22%)" }}>
                        <SearchTwoToneIcon className={styles.logo} />
                    </div>
                    <input type="text" onChange={getData} placeholder="Search for a country..." style={{ backgroundColor: Mode ? "white" : "hsl(209, 23%, 22%)" }} />
                </div>
                <div className={styles.filter}>
                    <select style={{ backgroundColor: Mode ? "white" : "hsl(209, 23%, 22%)" , color: !Mode ? "white" : "hsl(209, 23%, 22%)"}} >
                        <option>Filter By Region</option>
                        <option value="">Africa</option>
                        <option value="">America</option>
                        <option value="">Asia</option>
                        <option value="">Europe</option>
                        <option value="">Oceania</option>
                    </select>
                </div>
            </div>
            <Countrycards search={search}/>
        </div>
    )
}

export default Main;
