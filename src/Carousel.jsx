import { useEffect, useState } from "react";
import { list } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((currentSlide) => (currentSlide + 1) % list.length);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (currentSlide) => (currentSlide - 1 + list.length) % list.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <section className="slider-container">
      {list.map((person, personIndex) => {
        return (
          <article
            key={person.id}
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentSlide)}%)`,
              visibility: personIndex === currentSlide ? "visible" : "hidden",
              opacity: personIndex === currentSlide ? 1 : 0,
            }}
          >
            <img src={person.image} alt={person.name} className="person-img" />
            <h5 className="name">{person.name}</h5>
            <p className="title">{person.title}</p>
            <p className="text">{person.quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev-slide" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next-slide" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
