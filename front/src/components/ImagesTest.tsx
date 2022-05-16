import img1 from "../assets/confrontjs-banner.png";
import img2 from "../assets/cart.svg";
import img3 from "../assets/work-life-balance.gif";

interface P {
  props: string;
}
export const ImagesTest = ({ props }: P) => {
  return (
    <div>
      <span>{props}</span>
      <img src={img1} className="h-96" />
      <img src={img2} className="h-96" />
      <img src={img3} className="h-96" />
    </div>
  );
};
