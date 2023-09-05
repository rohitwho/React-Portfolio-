import TwitterIcon from "@mui/icons-material/Twitter";
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
export default function Socials() {
  return (
    <div className="Socials" >
      <a href="https://twitter.com/home" target="_blank">
        <TwitterIcon fontSize="large" color='primary'></TwitterIcon>
      </a>
      <a href="https://github.com/rohitwho" target="_blank">
        <GitHub fontSize="large"  color='primary'></GitHub>
      </a>
      <a
        href="https://www.linkedin.com/in/rohit-nayyar-373b7b167/"
        target="_blank"
      >
        <LinkedIn fontSize="large"  color='primary'></LinkedIn>
      </a>
    </div>
  );
}
