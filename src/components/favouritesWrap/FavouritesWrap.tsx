'use client'

import { useFavourites } from "../../../store";
import CatalogItem from "@/components/catalogItem/CatalogItem";
import styles from './FavouritesWrap.module.scss'
import { PageEmpty } from "../pageEmpty/PageEmpty";

export const FavouritesWrap = () => {
    const favourites = useFavourites((state) => state.favourites)


    return(
        <div className={styles.wrap}>
            {
                favourites.length !== 0 ?
                    favourites.map(item => (
                        <CatalogItem link={item.link} favourite={true} horizontal={true} category={item.category} id={item.id} key={item.id} alt={item.title} src={item.imgs[0]} title={item.previewTitle} price={item.variant[0].price} oldPrice={item.oldPrice} description={item.description} currency={'₽'} />
                    ))
                : <PageEmpty page='избранного' />
            }
        </div>
    )
}