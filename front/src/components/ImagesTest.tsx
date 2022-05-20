import Img2 from "../assets/cart.svg";
import Img1 from "../assets/confrontjs-banner.png";
import Img3 from "../assets/work-life-balance.gif";

interface P {
  readonly props: string;
}
export const ImagesTest = ({ props }: P) => {
  return (
    <div>
      <span className="text-5xl font-light">{props}</span>
      <img src={Img1} className="h-96" />
      <img src={Img2} className="h-96" />
      <img src={Img3} className="h-96" />
    </div>
  );
};
