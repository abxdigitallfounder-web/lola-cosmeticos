import SourceSection from "../shared/SourceSection";
import fragments from "./fragments.json";
import phone from "./phone-fragments.json";
export default function Benefits() { return <SourceSection name="Benefits" html={fragments.Benefits} mobileHtml={phone.Benefits} />; }
