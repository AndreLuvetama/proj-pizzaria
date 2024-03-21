import React from "react";
import imgfundo from '../../assets/img/fundo.jpg';
import pizza4 from '../../assets/img/pizza-s4.jpg';
import pizza3 from '../../assets/img/pizza-s3.jpg';
import pizza2 from '../../assets/img/pizza-s2.jpg';
import pizza1 from '../../assets/img/pizza-s1.jpg';
import {Swiper, SwiperSlide} from 'swiper/react';
//import { EffectFade } from 'swiper';

export default function SliderComponent() {
    const data = [
        { id: 1 , image : pizza1},
        { id: 2 , image : pizza2},
        { id: 3 , image : pizza3},
        { id: 3 , image : pizza4},

       // { id: 4 , image : "https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img1.png"},   
    ]

  return (
        <div className="flex flex-wrap row">
            <Swiper
              //modules={[EffectFade ]}
             // effect="fade"
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              >
                {data.map((item) => (
                    <SwiperSlide key= {item.id}>
                        <img src={item.image} alt="slider"  className="slide-item"/>
                  
                    </SwiperSlide>
                ))

                }
            </Swiper>
        </div>
  );
}