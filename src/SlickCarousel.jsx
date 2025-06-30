import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { list } from "./data";
import { FaQuoteRight } from "react-icons/fa";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div className="slick-container">
      <Slider {...settings}>
        {list.map((person) => {
          return (
            <article key={person.id}>
              <img
                src={person.image}
                alt={person.name}
                className="person-img"
              />
              <h5 className="name">{person.name}</h5>
              <p className="title">{person.title}</p>
              <p className="text">{person.quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </div>
  );
};
export default SlickCarousel;
