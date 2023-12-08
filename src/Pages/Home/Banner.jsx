import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/slider2.webp"
import banner2 from "../../assets/slider1.webp"
import banner3 from "../../assets/slider3.webp"
import "./Banner.css"
const Banner = () => {
    return (
        <div className="container mx-auto">
            <Carousel>
                <div className="">
                    <img src={banner1} className=""/>
                   
                </div>
                <div>
                <img src={banner2}/>
                  
                </div>
                <div>
                <img src={banner3}/>
                  
                </div>
            </Carousel>
        </div>

    );
};

export default Banner;