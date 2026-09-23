import SourceSection from "../shared/SourceSection";
import fragments from "./fragments.json";
import phone from "./phone-fragments.json";
export default function Launches() { return <SourceSection name="Launches" html={fragments.Launches} mobileHtml={phone.Launches} />; }
