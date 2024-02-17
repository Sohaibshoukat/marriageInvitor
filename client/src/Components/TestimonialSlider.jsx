
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "./Testimonial/t-avt-1.png",
    name: "Meghana",
    position: "Bride-to-be",
    message:
      "The custom designs added a personal touch that our guests loved. Highly recommend!",
  },
  {
    image: "./Testimonial/t-avt-2.png",
    name: "Aditya",
    position: "Groom-to-be",
    message:
      "Einvite's simple process and lovely design made planning our wedding invites a breeze",
  },
  {
    image: "./Testimonial/t-avt-3.png",
    name: "Laxmi",
    position: "Recent Bride",
    message:
      "Thrilled with Einvite! The fun features made our invite truly special.",
  },
  // {
  //   image: "/Testimonial/t-avt-4.png",
  //   name: "Emily Rodriguez",
  //   position: "Creative Director",
  //   message:
  //     "Zypher Digital has consistently impressed with their creative flair. From concept to execution, their designs capture the essence of our brand. We rely on Zypher Digital for all our creative needs.",
  // },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[320px] md:h-[300px] lg:h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row md:gap-x-4 lg:gap-x-8 h-full px-6 md:px-16">
            {/* avatar, name, position */}
            <div className="w-full md:max-w-[300px] lg:max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <img
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                {/* name */}
                <div className="text-lg md:text-xl">{person.name}</div>

                {/* position */}
                <div className=" text-[14px] md:text-[16px] uppercase font-light tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-2xl md:text-4xl xl:text-6xl text-[#364a61] mx-auto md:mx-0"
                  aria-aria-hidden
                />
              </div>

              {/* message */}
              <div className="text-base xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
