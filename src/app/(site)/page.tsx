import HomeCategories from "@/components/homeCategories/HomeCategories"
import HomeProducts from "@/components/homeProducts/HomeProducts"
import MainBanner from "@/components/mainBanner/MainBanner"
import Section from "@/components/section/Section"
import { productTest } from "../../../mockData/productsData"
import BottomSlider from "@/components/bottomSlider/BottomSlider"



const categories = [
  { img: '/categories/germetic.png', title: 'Мастики', link: '/catalog/mastiki', id: 1, amount: 4 },
  { img: '/categories/anticory.png', title: 'Антикоры', link: '/catalog/antikory', id: 2, amount: 3 },
  { img: '/categories/smazky.png', title: 'Смазки', link: '/catalog/smazki', id: 3, amount: 5 },
  { img: '/categories/masla.png', title: 'Масла', link: '/catalog/masla', id: 4, amount: 3 },
  { img: '/categories/silicony.png', title: 'Силиконы', link: '/catalog/silikony', id: 5, amount: 1 },
  { img: '/categories/chernitely.png', title: 'Чернители', link: '/catalog/cherniteli', id: 6, amount: 3 },
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
        <HomeProducts products={productTest} title="Продукция" />
      </Section>
      <Section bg={'bg'} wide={'wide'}>
        <BottomSlider />
      </Section>
    </>
  )
}
