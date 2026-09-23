import SourceSection from "../shared/SourceSection";
import fragments from "./fragments.json";
import phone from "./phone-fragments.json";
export default function Favorites() { return <SourceSection name="Favorites" html={fragments.Favorites} mobileHtml={phone.Favorites} />; }
