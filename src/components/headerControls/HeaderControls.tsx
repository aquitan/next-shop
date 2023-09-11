'use client'

import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { Icon } from "../icon/Icon";
import styles from './HeaderControls.module.css'
import SearchIcon from './search-icon.svg'
import FavouritesIcon from './favourite-icon.svg'
import CompareIcon from './compare-icon.svg'
import { useCompare, useFavourites } from "../../../store";

const HeaderControls = () => {
    const products = useCompare((state) => state.products)
    const favourites = useFavourites((state) => state.favourites)

    return (
        <div className={styles.controls}>
            <DarkModeToggle />
            <Icon path='/search'>
                <SearchIcon className={styles.icon} />
            </Icon>
            <Icon amount={favourites.length} path='/favourites'>
                <FavouritesIcon className={styles.icon} />
            </Icon>
            <Icon amount={products.length} path='/compare'>
                <CompareIcon className={styles.icon} />
            </Icon>
        </div>
    )
}

export default HeaderControls;