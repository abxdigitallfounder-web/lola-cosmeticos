import SourceSection from "../shared/SourceSection";
import fragments from "./fragments.json";
import phone from "./phone-fragments.json";
export default function SocialLinks() { return <SourceSection name="SocialLinks" html={fragments.SocialLinks} mobileHtml={phone.SocialLinks} />; }
