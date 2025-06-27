import { useState } from "react";
import { shortList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {};
  const prevSlide = () => {};
  return (
    <section className="slider-container">
      {shortList.map((person) => {
        return (
          <article key={person.id} className="slide">
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
      <button type="button" className="prev-slide" onClick={prevSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
