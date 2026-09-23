import SourceSection from "../shared/SourceSection";
import fragments from "./fragments.json";
import phone from "./phone-fragments.json";
export default function BeforeAfter() { return <SourceSection name="BeforeAfter" html={fragments.BeforeAfter} mobileHtml={phone.BeforeAfter} />; }
