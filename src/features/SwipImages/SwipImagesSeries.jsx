import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Card } from "features";
import { TMDBServices, useFetch } from 'commons';
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/bundle";
import "./SwipStyles.css";

export const SwipImagesSeries = () => {

  const { data, isLoading } = useFetch(TMDBServices.getTopRatedSeries);
  console.log(data)
    
  return (
    <Swiper
    breakpoints={{  
      300: {
        width: 300,
        slidesPerView: 2,
      },
      600: {
        width: 600,
        slidesPerView: 2,
      },
      900: {
        width: 900,
        slidesPerView: 3,
      },
      1200: {
        width: 1200,
        slidesPerView: 4,
      },
      1500: {
        width: 1500,
        slidesPerView: 5,
      },
    }}
      spaceBetween={20}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper m-3" >
        {!isLoading &&
        data.map((data_element) => {
          return (
            <SwiperSlide key={data_element.id}>
              <Card element={data_element} />
            </SwiperSlide>)
        })}
    </Swiper>
  );
};