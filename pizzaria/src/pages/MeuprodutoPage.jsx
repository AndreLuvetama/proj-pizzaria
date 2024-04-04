import React from 'react'
import { HeaderCompnent } from '../ui/components/HeaderCompnent'
import { FooterComponent } from '../ui/components/FooterComponent'
import pizza7 from '../assets/img/destaques/pizza-4.jpg'

export const MeuprodutoPage = () => {
  return (
    <>
        <HeaderCompnent/>
            <main className='flex flex-row space-y-12 w-screen  p-10 font-medium'>
                <div className='flex flex-row gap-4 justify-between'>
                    <div className="basis-1/3 ">   
                        <div className="flex divMenu items-center ">
                            <img src ={pizza7} className='' />
                        </div>
                    </div>
                    <div className="basis-1/3 "> 
                    <h3 className="text-2xl font-semibold">
                         Calabresa
                    </h3><br/>
                    <p>Escolha seu sabor Dá um Hut preferido e por +R$10 leve 2 refris lata ou por +R$15 leve 2 Heineken long neck.</p>
              
                    <span>Total: R$ 76,00</span>
                    </div>
                    <div className="basis-1/3 pt-4">
                        <span>Pedido Número: 63823 </span>
                        <span>Status do pedido: em andamento </span>
                        <span>Endereço de entrega: Rua Rainha das missões 14, apt 06 </span>

                    </div>               
                </div>
                
                

            </main>
            <div className='col row-auto'>
                <hr class="w-screen h-px my-8 bg-gray-700 border-spacing-4 dark:bg-gray-700" />
                </div>
        <FooterComponent/>
    
    </>
  )
}
