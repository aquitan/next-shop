import { PageBanner } from "@/components";
import CatalogItem from "@/components/catalogItem/CatalogItem";
import { FilterControls } from "@/components/filterControls/FilterControls";
import HomeProducts from "@/components/homeProducts/HomeProducts";
import Section from "@/components/section/Section";
import { productTest } from "../../../../mockData/productsData";



const Catalog = () => {



    return (
        <>
            <div>
                <PageBanner title="Каталог" />
            </div>
            <Section wide="wide" bg="bg">
                <FilterControls length={productTest.length} />
            </Section>

            <Section>
                <HomeProducts>
                    {
                        productTest.map((item: any) => (
                            <CatalogItem key={item.id} alt={item.title} src={item.imgs[0]} title={item.previewTitle} price={item.variant[0].price} oldPrice={item.oldPrice} description={item.description} currency={'₽'} id={item.id} category={item.category} />
                        ))
                    }
                </HomeProducts>
            </Section>
        </>
    )
}

export default Catalog;