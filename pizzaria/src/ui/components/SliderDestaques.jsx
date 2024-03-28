import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import pizza1 from '../../assets/img/destaques/pizza-1.jpg';
import pizza2 from '../../assets/img/destaques/pizza-2.jpg';
import pizza3 from '../../assets/img/destaques/pizza-3.jpg';
import pizza4 from '../../assets/img/destaques/pizza-4.jpg';
import pizza5 from '../../assets/img/destaques/pizza-5.jpg';

import { FaBeer, FaCartArrowDown } from "react-icons/fa";
import {Pagination} from 'swiper/modules';



export default function SliderDestaques() {

  const data =[
    {id: 1, image: pizza4, price: " 40,00", title: 'Camussa'},
    {id: 2, image: pizza4, price: " 49.99", title: 'Calabresa'},
    {id: 3, image: pizza4, price: " 50,45", title: 'Mussarela'},
    {id: 4, image: pizza4, price: " 60,00", title: 'Brocolis'},
    {id: 5, image: pizza4, price: " 29,49", title: '4 Queijo'},
    {id: 1, image: pizza4, price: " 40,10", title: 'Atum'},
    {id: 2, image: pizza4, price: " 90,70", title: 'Bacon'},
    {id: 3, image: pizza4, price: " 70,50", title: 'Beirute'},

  ]


  return (
    <>
       <div className="flex justify-items-center m-20 text-center">
        
          <Swiper 
            centeredSlides={true}
            grabCursor={true}
            pagination={{
                clickable: true,
            }}
            navigation
            modules={[Pagination]}
            className='mySwiper'
            breakpoints={{
              0:{
                slidesPerView: 1,
                spaceBetween:10
              },
              480:{
                slidesPerView: 2,
                spaceBetween:10

              },
              768:{
                slidesPerView: 3,
                spaceBetween:15

              }
            }}         
            >                    
                { data.map((item) => (
                    <SwiperSlide key={item.id} >
                    
                      <div className="block rounded-lg bg-white shadow-seconday-1 dark:bg-surface-dark">
                          <img src={item.image} className='img-destaque'/>
                          <div className="p-2 text-surface dark:text-white">
                            <h5 className="mb-2 text-center text-4xl font-medium leading-tight">R${item.price}</h5>
                            <p className="mb-2  text-2xl">  {item.title}  </p>                         
                          </div>
                          <div className="border-t-2 border-neutral-100 px-6 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300">
                      

                        <button class="bg-orange-500 hover:bg-orange-400 text-gray-50 font-bold py-2 px-4 rounded inline-flex items-center">
                      <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">

                      <path d="M12 19.5 A1.5 1.5 0 0 1 10.5 21 A1.5 1.5 0 0 1 9 19.5 A1.5 1.5 0 0 1 12 19.5 z" />
                          <path d="M19 19.5 A1.5 1.5 0 0 1 17.5 21 A1.5 1.5 0 0 1 16 19.5 A1.5 1.5 0 0 1 19 19.5 z" />
                          <path d="M21 7H7.334L6.18 4.23A1.995 1.995 0 004.333 3H2v2h2.334l4.743 11.385c.155.372.52.615.923.615h8c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0021 7zm-4 6h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z" />
                      </svg>
                <span>Adicionar ao carrinho</span>
              </button>
                    </div>

                      </div>
                    
                    </SwiperSlide> 
                  ))
                  
                }                
            </Swiper>
       </div>
    
    </>
  )
}
