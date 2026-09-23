import SourceSection from "../shared/SourceSection";
import fragments from "./fragments.json";
import phone from "./phone-fragments.json";
export default function DailyDeals() { return <SourceSection name="DailyDeals" html={fragments.DailyDeals} mobileHtml={phone.DailyDeals} />; }
