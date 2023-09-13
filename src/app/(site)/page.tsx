import { SliderCentered } from "@/components"
import Button from "@/components/customButton/CustomButton"
import CategorieItem from "@/components/categorieItem/CategorieItems"
import HomeCategories from "@/components/homeCategories/HomeCategories"
import HomeProducts from "@/components/homeProducts/HomeProducts"
import MainBanner from "@/components/mainBanner/MainBanner"
import Section from "@/components/section/Section"
import { productTest } from "../../../mockData/productsData"
import styles from './page.module.css'



const categories = [
  { img: '/categories/germetic.png', title: 'Мастики', link: '/catalog/mastiki', id: 1 },
  { img: '/categories/anticory.png', title: 'Антикоры', link: '/catalog/antikory', id: 2 },
  { img: '/categories/smazky.png', title: 'Смазки', link: '/catalog/smazki', id: 3 },
  { img: '/categories/masla.png', title: 'Масла', link: '/catalog/masla', id: 4 },
  { img: '/categories/silicony.png', title: 'Силиконы', link: '/catalog/silikony', id: 5 },
  { img: '/categories/chernitely.png', title: 'Чернители', link: '/catalog/cherniteli', id: 6 },
]


export default function Home() {
  return (
    <>
      <Section>
        <MainBanner />
      </Section>
      <Section>
        <HomeCategories categories={categories} />
      </Section>
      <Section>
        <HomeProducts products={productTest} title="наша продукция" />
      </Section>
      <Section bg={'bg'} wide={'wide'}>
        <div className={styles.bottomSliderWrap}>
          <div >
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
      </Section>
    </>
  )
}
