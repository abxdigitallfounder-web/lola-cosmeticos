import SourceSection from "../shared/SourceSection";
import fragments from "./fragments.json";
import phone from "./phone-fragments.json";
export default function HairTypes() { return <SourceSection name="HairTypes" html={fragments.HairTypes} mobileHtml={phone.HairTypes} />; }
