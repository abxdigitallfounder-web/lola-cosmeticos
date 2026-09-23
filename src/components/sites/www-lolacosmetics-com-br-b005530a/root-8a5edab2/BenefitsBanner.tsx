import SourceSection from "../shared/SourceSection";
import fragments from "./fragments.json";
import phone from "./phone-fragments.json";
export default function BenefitsBanner() { return <SourceSection name="BenefitsBanner" html={fragments.BenefitsBanner} mobileHtml={phone.BenefitsBanner} />; }
