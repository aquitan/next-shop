import { CatalogContainer, PageBanner } from "@/components";
import { productTest } from "../../../../mockData/productsData";



const Catalog = () => {



    return (
        <>
            <div>
                <PageBanner title="Каталог" />
            </div>
            <CatalogContainer products={productTest} />
        </>
    )
}

export default Catalog;