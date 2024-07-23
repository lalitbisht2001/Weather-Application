import styles from "./Header.module.css";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useEffect, useState } from "react";
import Main from "./Main";
function Header() {
    const [Mode, setMode] = useState(true);
    const modeChange = () => {
        setMode(prev => !prev);
    }
    useEffect(() => {
        document.body.setAttribute('data-theme', Mode ? 'light' : 'dark');
    }, [Mode]);
    return (
        <>
            <div className={styles.main}>
                <div className={styles.logoname}>
                    Where in the  world ?
                </div>
                <div onClick={modeChange} className={styles.modebox}>
                    {
                        !Mode ? (
                            <div className={styles.mode}>
                                <NightlightRoundIcon />
                                <p>
                                    Dark Mode
                                </p>
                            </div>
                        ) :
                            (
                                <div className={styles.mode}>
                                    <LightModeIcon />
                                    <p>
                                        Light Mode
                                    </p>
                                </div>
                            )
                    }

                </div>
            </div>
            <Main Mode={Mode} />
        </>
    )
}

export default Header
