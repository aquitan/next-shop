import { Icon } from "../icon/Icon";
import styles from './HeaderControls.module.css'

const HeaderControls = () => {
    return (
        <div className={styles.controls}>
            <Icon path={'/'} src={'/search-icon.svg'} alt='Поиск' width={20} height={20} />
            <Icon path={'/auth'} src={'/user-cabinet.svg'} alt='Личный кабинет' width={20} height={20} />
            <Icon path={'/'} amount={2} src={'/favourites-icon.svg'} alt='Избранное' width={20} height={20} />
        </div>
    )
}

export default HeaderControls;