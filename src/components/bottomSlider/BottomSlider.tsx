import { SliderCentered } from ".."
import Button from "../button/Button"
import styles from './BottomSlider.module.scss'

const BottomSlider = () => {
    return(
        <div className={styles.bottomSliderWrap}>
          <div className={styles.description}>
            <div className={styles.bottomSliderTitle}>
              CARGOSIL — надежный и простой в применении герметик на основе синтетического или акрил-каучука.
            </div>
            <div style={{ fontSize: 16, margin: '10px 0 30px 0', color: 'var(--dark-grey)' }}>
              Идеально подходит для ремонта и гидроизоляции всех видов грузовых полуприцепов, фургонов и тентов, а также пассажирского транспорта. Не требует смешения компонентов и обеспечивает великолепную гидрозащиту уже через 24 часа после нанесения.
            </div>
            <Button color='cart' link="/catalog">Каталог</Button>
          </div>
          <div className={styles.bottomSlider}>
            <SliderCentered />
          </div>
        </div>
    )
}

export default BottomSlider;