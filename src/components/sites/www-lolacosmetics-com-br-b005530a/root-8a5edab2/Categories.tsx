import SourceSection from "../shared/SourceSection";
import fragments from "./fragments.json";
import phone from "./phone-fragments.json";
export default function Categories() { return <SourceSection name="Categories" html={fragments.Categories} mobileHtml={phone.Categories} />; }
