import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import styles from "../styles";
import { avatar, gradient } from "../assets";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const responsive = {
    desktop: {
      breakpoint: { max: 60000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };

  const reviewData = [
    {
      id: 0,
      review: `Using Daysheets has made touring more efficient and organized. It’s a complete game-changer.`,
      image: avatar,
      name: "John Warren",
      title: "Tour Manager / Tour Accountant",
    },
    {
      id: 1,
      review: `“Daysheets is quick & easy to learn, their team is always available, and they implement our suggestions. Daysheets has quickly become our go-to touring information highway, and I am looking forward to their growth.`,
      image: avatar,
      name: "Tracey Wiedeman",
      title: "Production Coordinator",
    },
    {
      id: 2,
      review: `Daysheets has just scratched the surface of its potential. We can’t wait to see what’s next.`,
      image: avatar,
      name: "Rob Mirhadi",
      title: "Tour Manager",
    },
    {
      id: 3,
      review: `Many of us nerdy managers are constantly seeking better solutions for more efficient tours. So far, it is the best tool I’ve seen out there in the market. It’s exactly what I was looking for, something that works for 2023, smart, intuitive and evolving quickly.`,
      image: avatar,
      name: "Ben Matusow",
      title: "Artist Manager",
    },
  ];

  const review = reviewData.map((item, index) => (
    <ReviewCard
      key={item.id}
      review={item.review}
      image={item.image}
      name={item.name}
      title={item.title}
      opacity={index === currentSlide ? "opacity-100" : "opacity-50"}
    />
  ));

  return (
    <div className={`${styles.sectionBox} bg-blue relative`} loading="lazy">
      <div className={`relative`}>
        <Carousel
          responsive={responsive}
          className="z-10"
          arrows={true}
          centerMode={true}
          infinite={true}
          beforeChange={(nextSlide) => {
            setCurrentSlide(
              (nextSlide + reviewData.length - 2) % reviewData.length
            );
          }}
        >
          {review}
        </Carousel>
      </div>

      <img
        src={gradient}
        alt="Gradient background"
        className="absolute top-0 left-0 z-0 w-full h-full object-cover opacity-25"
      />
    </div>
  );
};

export default Reviews;
