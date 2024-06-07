// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { StyledSlider } from "./Styles";

export const Slider = () => {
  return (
    <StyledSlider>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h3>Friedrich Nietzsche</h3>{" "}
          <p>
            “Whoever fights monsters should see to it that in the process he
            does not become a monster. And if you gaze long enough into an
            abyss, the abyss will gaze back into you.”
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>William Shakespeare</h3>
          <p>“Hell is empty and all the devils are here.”</p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Stephen King</h3>
          <p>
            "Monsters and ghosts are real and live among us, and sometimes they
            win."
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>H.P. Lovecraft</h3>
          <p>"The scariest monsters are the ones that lurk in the shadows."</p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Adrian Atamańczuk</h3>
          <p>
            "There are doors that should not be opened. It is dangerous even to
            go near others, lest someone open them from within at the sound of
            our footsteps. For you never know what or who awaits you on the
            other side."
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Fyodor Dostoevsky</h3>
          <p>
            "If he has a conscience, he will suffer for his wrong-doing; that
            will be his punishment - the same as prison"
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Haruki Murakami</h3>
          <p>"Death is not the opposite of life, but a part of it."</p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Dr. Henry Howard Holmes </h3>
          <p>
            "I was born with the devil inside me. I could not help the fact that
            I was a murderer, no more than a poet can help the inspiration to
            sing."
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>David Alan Gore</h3>
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
