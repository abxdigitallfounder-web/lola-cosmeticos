import SourceSection from "../shared/SourceSection";
import fragments from "./fragments.json";
import phone from "./phone-fragments.json";
export default function Affiliate() { return <SourceSection name="Affiliate" html={fragments.Affiliate} mobileHtml={phone.Affiliate} />; }
