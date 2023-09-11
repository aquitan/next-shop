import { FavouritesWrap, PageBanner } from "@/components";
import Section from "@/components/section/Section"


const Favourites = () => {
    

    return(
        <>
            <div>
				<PageBanner title="Избранное" />
			</div>
            <Section >
                <FavouritesWrap/>
            </Section>
        </>
    )
}

export default Favourites;