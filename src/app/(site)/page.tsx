import { SliderCentered } from "@/components"
import Button from "@/components/button/Button"
import CatalogItem from "@/components/catalogItem/CatalogItem"
import CategorieItem from "@/components/categorieItem/CategorieItems"
import HomeCategories from "@/components/homeCategories/HomeCategories"
import HomeProducts from "@/components/homeProducts/HomeProducts"
import MainBanner from "@/components/mainBanner/MainBanner"
import Section from "@/components/section/Section"
import { productTest } from "../../../mockData/productsData"


const categories = [
  { img: '/germetic.png', title: 'Гидроизоляция', link: '/catalog', id: 1 },
  { img: '/maslo.png', title: 'Автохимия', link: '/catalog', id: 2 },
  { img: '/maslo.png', title: 'Масла', link: '/catalog', id: 3 },
]

// const catalogItems = [
//   { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: 800, alt: 'Гидроизоляция летняя', currency: '₽', id: 1 },
//   { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 2 },
//   { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 3 },
//   { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 4 },
//   { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 5 },
//   { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 6 },
//   { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 7 },
//   { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 8 },
// ]

export default function Home() {
  return (
    <>
      <Section>
        <MainBanner />
      </Section>
      <Section>
        <HomeCategories>
          {
            categories.map((item: any) => (
              <CategorieItem link={item.link} key={item.title} alt={item.title} src={item.img} title={item.title} />
            ))
          }
        </HomeCategories>
      </Section>
      <Section>
        <HomeProducts title="наша продукция">
          {
            productTest.map((item: any) => (
              <CatalogItem category={item.category} id={item.id} key={item.id} alt={item.title} src={item.imgs[0]} title={item.previewTitle} price={item.variant[0].price} oldPrice={item.oldPrice} description={item.description} currency={'₽'} />
            ))
          }
        </HomeProducts>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button color='ghost'>Еще</Button>
        </div>
      </Section>
      <Section bg={'bg'} wide={'wide'}>
        <div style={{ display: 'flex', gap: 50 }}>
          <div style={{ width: 600, flexShrink: 0 }}>
            <div style={{ fontSize: 32, lineHeight: '40px', margin: '100px 0 20px 0' }}>
              CARGOSIL — надежный и простой в применении герметик на основе синтетического или акрил-каучука.
            </div>
            <div style={{ fontSize: 16, margin: '10px 0 30px 0', color: 'var(--dark-grey)' }}>
              Идеально подходит для ремонта и гидроизоляции всех видов грузовых полуприцепов, фургонов и тентов, а также пассажирского транспорта. Не требует смешения компонентов и обеспечивает великолепную гидрозащиту уже через 24 часа после нанесения.
            </div>
            <Button color='cart' link="/catalog">Каталог</Button>
          </div>
          <SliderCentered />
        </div>
      </Section>
    </>
  )
}
