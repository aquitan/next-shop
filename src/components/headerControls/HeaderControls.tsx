import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { Icon } from "../icon/Icon";
import styles from './HeaderControls.module.css'
import SearchIcon from './search-icon.svg'
import FavouritesIcon from './favourite-icon.svg'
import CompareIcon from './compare-icon.svg'

const HeaderControls = () => {
    return (
        <div className={styles.controls}>
            <DarkModeToggle />
            <Icon path='/search'>
                <SearchIcon className={styles.icon} />
            </Icon>
            <Icon path='/'>
                <FavouritesIcon className={styles.icon} />
            </Icon>
            <Icon path='/'>
                <CompareIcon className={styles.icon} />
            </Icon>
        </div>
    )
}

export default HeaderControls;