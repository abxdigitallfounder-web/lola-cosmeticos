import SourceSection from "../shared/SourceSection";
import fragments from "./fragments.json";
import phone from "./phone-fragments.json";
export default function Hero() { return <SourceSection name="Hero" html={fragments.Hero} mobileHtml={phone.Hero} />; }
