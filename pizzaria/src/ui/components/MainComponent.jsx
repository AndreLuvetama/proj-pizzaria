import React from 'react'

import pizza1 from '../../assets/img/pizza-s1.jpg';
import SliderDestaques from './SliderDestaques';
import MenuPizza from './MenuPizza';

export const MainComponent = () => {
  return (
    <div className='w-full bg-slate-50'>
        <main role="main" className='row flex items-center '>
            <div className='w-screen bg-slate-50 content-center justify-center p-6'> 
                <h1 className='text-5xl text-center' >Destaques do dia</h1>            
                <div className='row '> <SliderDestaques /> </div>                         
            <div class="flex m-5">           
              <div class="flex items-center ml-10  ">                            
              <p> <b className='text-2xl'>Nossas Pizzas</b><br/> <br/>Preparar uma pizza é uma autêntica obra de arte. A sua origem é controversa. Para alguns, tudo começou com os egípcios, primeiros a misturar farinha com água; para outros, os gregos teriam sido os pioneiros em lidar com uma massa à base de farinha de trigo, arroz ou grão-de-bico, assando-a sobre tijolos quentes.
                  </p>        
              </div>
              <div class="flex items-center mr-10 p-5 rounded-lg bg-orange-100 dark:bg-gray-300  " role='alert'>
              As pizzas da Prospere são perfeitas para viagens, comemorações ou naquele dia da preguiça no sofá. Elas têm a qualidade artesanal da Bráz Pizzaria com a praticidade de você finalizar em poucos minutos no forno caseiro. 
                          
              </div>              
             </div>
            </div>      
        </main>
    </div>
  )
}
