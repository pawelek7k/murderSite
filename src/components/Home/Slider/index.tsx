import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { HeadingH3 } from "../../Heading/h3";
import { StyledSlider } from "./Styles";

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
        <SwiperSlide>
          <HeadingH3>Friedrich Nietzsche</HeadingH3>{" "}
          <p>
            “Whoever fights monsters should see to it that in the process he
            does not become a monster. And if you gaze long enough into an
            abyss, the abyss will gaze back into you.”
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <HeadingH3>William Shakespeare</HeadingH3>
          <p>“Hell is empty and all the devils are here.”</p>
        </SwiperSlide>
        <SwiperSlide>
          <HeadingH3>Stephen King</HeadingH3>
          <p>
            "Monsters and ghosts are real and live among us, and sometimes they
            win."
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <HeadingH3>H.P. Lovecraft</HeadingH3>
          <p>"The scariest monsters are the ones that lurk in the shadows."</p>
        </SwiperSlide>
        <SwiperSlide>
          <HeadingH3>Adrian Atamańczuk</HeadingH3>
          <p>
            "There are doors that should not be opened. It is dangerous even to
            go near others, lest someone open them from within at the sound of
            our footsteps. For you never know what or who awaits you on the
            other side."
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <HeadingH3>Fyodor Dostoevsky</HeadingH3>
          <p>
            "If he has a conscience, he will suffer for his wrong-doing; that
            will be his punishment - the same as prison"
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <HeadingH3>Haruki Murakami</HeadingH3>
          <p>"Death is not the opposite of life, but a part of it."</p>
        </SwiperSlide>
        <SwiperSlide>
          <HeadingH3>Dr. Henry Howard Holmes </HeadingH3>
          <p>
            "I was born with the devil inside me. I could not help the fact that
            I was a murderer, no more than a poet can help the inspiration to
            sing."
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <HeadingH3>David Alan Gore</HeadingH3>
          <p>
            "Never in my life had I felt so empty as I did then, and I shall
            never forget that feeling. It was as if I had stepped out of the
            gates of some kingdom and could never get back."
          </p>
        </SwiperSlide>
      </Swiper>
    </StyledSlider>
  );
};
