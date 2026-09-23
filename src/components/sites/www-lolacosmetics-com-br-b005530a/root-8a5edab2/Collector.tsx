import SourceSection from "../shared/SourceSection";
import fragments from "./fragments.json";
import phone from "./phone-fragments.json";
export default function Collector() { return <SourceSection name="Collector" html={fragments.Collector} mobileHtml={phone.Collector} />; }
