import { Filter, PageBanner } from "@/components";
import CatalogItem from "@/components/catalogItem/CatalogItem";
import { FilterControls } from "@/components/filterControls/FilterControls";
import HomeProducts from "@/components/homeProducts/HomeProducts";
import Section from "@/components/section/Section";
import Image from "next/image";


const catalogItems = [
    { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: 800, alt: 'Гидроизоляция летняя', currency: '₽', id: 1 },
    { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 2 },
    { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 3 },
    { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 4 },
    { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 5 },
    { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 6 },
    { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 7 },
    { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 8 },
    { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 9 },
    { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 10 },
    { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 11 },
    { img: '/germetic.png', title: 'Гидроизоляция летняя', description: 'Летняя гидроизоляция для фургонов Cargosil', price: 500, oldPrice: null, alt: 'Гидроизоляция летняя', currency: '₽', id: 12 },
]


const Catalog = () => {
    return (
        <>
            <div>
                <PageBanner title="Каталог" />
            </div>
            <Section wide="wide" bg="bg">
                <FilterControls length={catalogItems.length} />
            </Section>

            <Section>
                <HomeProducts>
                    {
                        catalogItems.map((item: any) => (
                            <CatalogItem key={item.id} alt={item.title} src={item.img} title={item.title} price={item.price} oldPrice={item.oldPrice} description={item.description} currency={item.currency} />
                        ))
                    }
                </HomeProducts>
            </Section>
        </>
    )
}

export default Catalog;