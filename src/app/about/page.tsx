import { PageBanner } from "@/components";
import Section from "@/components/section/Section";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Cargosil Автохимия | О нас',
    description: 'Страница о бренде Cargosil',
}


const Contacts = () => {
    return (
        <>
            <div>
                <PageBanner title="О Компании" />
            </div>
            <Section>

            </Section>
        </>
    )
}

export default Contacts;