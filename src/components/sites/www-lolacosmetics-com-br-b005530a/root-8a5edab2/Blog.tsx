import SourceSection from "../shared/SourceSection";
import fragments from "./fragments.json";
import phone from "./phone-fragments.json";
export default function Blog() { return <SourceSection name="Blog" html={fragments.Blog} mobileHtml={phone.Blog} />; }
