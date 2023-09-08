import { PageBanner } from "@/components";
import { CompareWrap } from "@/components/compareWrap/CompareWrap";
import Section from "@/components/section/Section";

const Compare = () => {
	return (
		<>
			<div>
				<PageBanner title="Сравнение" />
			</div>
			<Section>
				<div>
					<CompareWrap/>
				</div>
			</Section>
		</>
	)
}

export default Compare;