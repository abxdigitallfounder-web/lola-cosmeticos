import SourceSection from "../shared/SourceSection";
import fragments from "./fragments.json";
import phone from "./phone-fragments.json";
export default function Reviews() { return <SourceSection name="Reviews" html={fragments.Reviews} mobileHtml={phone.Reviews} />; }
