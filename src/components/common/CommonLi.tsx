import { Location } from "react-router-dom";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li: React.FC<LiProps> = ({ url, text, location, Icon }) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default Li;
