'use client'

import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { Icon } from "../icon/Icon";
import styles from './HeaderControls.module.css'
import SearchIcon from './search-icon.svg'
import FavouritesIcon from './favourite-icon.svg'
import CompareIcon from './compare-icon.svg'
import { useCompare } from "../../../store";

const HeaderControls = () => {
    const products = useCompare((state) => state.products)

    return (
        <div className={styles.controls}>
            <DarkModeToggle />
            <Icon path='/search'>
                <SearchIcon className={styles.icon} />
            </Icon>
            <Icon path='/'>
                <FavouritesIcon className={styles.icon} />
            </Icon>
            <Icon amount={products.length} path='/compare'>
                <CompareIcon className={styles.icon} />
            </Icon>
        </div>
    )
}

export default HeaderControls;