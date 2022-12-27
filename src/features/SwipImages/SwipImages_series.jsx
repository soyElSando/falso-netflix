import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Card } from "features";
import { TMDBServices, useFetch } from 'commons/services';
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/bundle";
import "./SwipStyles.css";

export const SwipImages_series = () => {

  const { data, isLoading } = useFetch(TMDBServices.getPopularSeries);
    
  return (
    <Swiper
      slidesPerView={5}
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