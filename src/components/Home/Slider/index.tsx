import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { HeadingH3 } from "../../Heading/h3";
import { StyledSlider } from "./Styles";

const quotes = [
  {
    author: "Friedrich Nietzsche",
    text: "“Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.”",
  },
  {
    author: "William Shakespeare",
    text: "“Hell is empty and all the devils are here.”",
  },
  {
    author: "Stephen King",
    text: "“Monsters and ghosts are real and live among us, and sometimes they win.”",
  },
  {
    author: "H.P. Lovecraft",
    text: "“The scariest monsters are the ones that lurk in the shadows.”",
  },
  {
    author: "Adrian Atamańczuk",
    text: "“There are doors that should not be opened. It is dangerous even to go near others, lest someone open them from within at the sound of our footsteps. For you never know what or who awaits you on the other side.”",
  },
  {
    author: "Fyodor Dostoevsky",
    text: "“If he has a conscience, he will suffer for his wrong-doing; that will be his punishment - the same as prison.”",
  },
  {
    author: "Haruki Murakami",
    text: "“Death is not the opposite of life, but a part of it.”",
  },
  {
    author: "Dr. Henry Howard Holmes",
    text: "“I was born with the devil inside me. I could not help the fact that I was a murderer, no more than a poet can help the inspiration to sing.”",
  },
  {
    author: "David Alan Gore",
    text: "“Never in my life had I felt so empty as I did then, and I shall never forget that feeling. It was as if I had stepped out of the gates of some kingdom and could never get back.”",
  },
];

export const Slider = () => {
  return (
    <StyledSlider>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {quotes.map((quote, index) => (
          <SwiperSlide key={index}>
            <HeadingH3>{quote.author}</HeadingH3>
            <p>{quote.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSlider>
  );
};
