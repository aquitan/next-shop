'use client'

import DarkModeToggle from "@/components/darkModeToggle/DarkModeToggle";
import { Icon } from "@/components/icon/Icon";
import styles from './HeaderControls.module.scss'
import SearchIcon from './search-icon.svg'
import FavouritesIcon from './favourite-icon.svg'
import CompareIcon from './compare-icon.svg'
import { useCompare, useFavourites } from "../../../store";


type HeaderControlsProps = {
    setActive: (state: any) => any,
    active: boolean
}

const HeaderControls = ({ setActive, active }: HeaderControlsProps) => {
    const products = useCompare((state) => state.products)
    const favourites = useFavourites((state) => state.favourites)

    const onSearch = () => {
        console.log('search')
        setActive((active: boolean) => !active)
    }

    return (
        <div className={styles.controls}>
            <DarkModeToggle />
            <SearchIcon onClick={onSearch} className={styles.icon} />
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