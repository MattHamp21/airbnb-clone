import "../Css/Banner.css";
import { Button } from "@material-ui/core";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_info">
        <h1>Get out and strech your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the didden gems near you
        </h5>
        <Button variant="outlined">Explore Near By</Button>
      </div>
    </div>
  );
}

export default Banner;
