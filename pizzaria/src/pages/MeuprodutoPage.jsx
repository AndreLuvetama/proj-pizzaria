import React, { useState } from 'react'
import { HeaderCompnent } from '../ui/components/HeaderCompnent'
import { FooterComponent } from '../ui/components/FooterComponent'
import pizza7 from '../assets/img/destaques/pizza-4.jpg'
import {useNavigate} from 'react-router-dom'

export const MeuprodutoPage = () => {
    const navigator = useNavigate()

    var listaArray = localStorage.getItem("lista");
    listaArray = JSON.parse(listaArray);


    function handleForm(e){


        e.preventDefault();

        localStorage.removeItem("lista");
        navigator("/")

    }

   



  return (
    <>
        <HeaderCompnent/>
           <div className="flex items-center p-10 align-middle">   <h1 className='text-center text-3xl'>Carrinho de compra</h1> </div>
            <main className='flex flex-row space-y-12 w-screen  p-10 font-medium'>
            
               <form>
               { listaArray.map((item, index) => (                    
                        <div className='flex flex-row gap-4 justify-between' key={index} >    
                                      
                        <div className="basis-1/3 ">   
                            <div className="flex divMenu items-center ">
                                <img src ={pizza7} className='' />
                            </div>
                        </div>
                        <div className="basis-1/3 "> 
                        <h3 className="text-2xl font-semibold">
                             Pizza: {item.title}
                        </h3><br/>
                        <p>Descrição: {item.description}.</p>
                        <p>Número de item: {item.count}.</p>                  
                        <p>Total: R$ {item.price * item.count}</p>
                       
                        </div>
                        <div className="basis-1/3 pt-4">
                            <h1 className='text-2xl'>Dados do cliente</h1><br/>
                            <p><b>Nome do cliente</b>:  </p>
                            <p><b>Status do pedido:</b> Em andamento </p>
                            <p><b>Endereço de entrega:</b> Rua Rainha das missões 14, apt 06 </p>
                        </div>   
                         <hr className='bg-slate-800'/>         
                    </div>
                
                ))}
                <div className='grid grid-cols-3 gap-4 place-items-center h-56'>
                <button
                    className="bg-orange-700  text-white active:bg-orange-500 font-bold uppercase text-sm px-10 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"  onClick={(e) => handleForm(e) } >                 
                    Enviar Pedido           
                  </button>                  
                </div>

               </form>
               
                </main>
            <div className='col row-auto'>
                <hr class="w-screen h-px my-8 bg-gray-700 border-spacing-4 dark:bg-gray-700" />
                </div>
        <FooterComponent/>
    
    </>
  )
}
