import React, { useState } from 'react'
import { HeaderCompnent } from '../ui/components/HeaderCompnent'
import { FooterComponent } from '../ui/components/FooterComponent'
import pizza7 from '../assets/img/destaques/pizza-4.jpg'
import { createVenda, savePizza } from '../service/PizzaService'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/ReactToastify.css"
import {useNavigate} from 'react-router-dom'

export const MeuprodutoPage = () => {
    const navigator = useNavigate()
    const[description, setDescription] = useState(localStorage.getItem("description"))
    const[usersId, setUserid] = useState(1)
    const[pizzaId, setPizzaid] = useState(1)
    const[quantity, setQuantity] =  useState(localStorage.getItem("quantity"))
    const[qtd_total, setQtdTotal] = useState(0)   
    const[price, setPrice] = useState(localStorage.getItem("price"))
    const[title, setTitle] = useState(localStorage.getItem("title"))
    const[file, setFile] = useState(localStorage.getItem("file"))

   
   // var listaArray = localStorage.getItem("lista");
   // listaArray = JSON.parse(listaArray);    


    function handleForm(e){
        e.preventDefault();
        
       
        const pizzas = {title, price, description, pizzaId, quantity, usersId};
        console.log("Pizzas a envio", pizzas)
        createVenda(pizzas).then((response)=>{
            console.log(response.data)
            return toast.info("Pedido enviado com sucesso")
            localStorage.clear();
            //localStorage.removeItem("lista");
            navigator("/meusprodutos")
        }).catch((error)=>{
            console.error(error)
            return toast.error("Pedido não enviado, tentar mais tarde")
        })
        

    }

   



  return (
    <>
        <HeaderCompnent/>
           <div className="flex items-center p-10 align-middle">   <h1 className='text-center text-3xl'>Carrinho de compra</h1> </div>
           
           <ToastContainer />
            <main className='flex flex-row space-y-12 w-screen  p-10 font-medium'>
            
               <form>
                               
                        <div className='flex flex-row gap-4 justify-between'  >  
                        <input type='hidden' name='pizzaId' value={pizzaId} onChange={(e) =>  setPizzaid(e.target.value)} />
                        <input type='text' name='usersId' value={usersId} onChange={(e) => setUserid(e.target.value)} />

                        <div className="basis-1/3 ">   
                            <div className="flex divMenu items-center ">
                               <img className="object-cover w-full rounded-t-lg h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`data:image/jpeg;base64, ${file}`} />
                            </div>
                        </div>
                        <div className="basis-1/3 "> 
                        <h3 className="text-2xl font-semibold">
                            Confirma o seu pedido<br/>      
                                                 
                             <input type='text' name='title' value={title}  onChange={(e) => setTitle(e.target.title)} 
                             className='sm:text-xl'  placeholder={title}  />
                        </h3>
                        <p>Descrição: 
                           
                        <input type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)}
                             className='p-1 sm:text-xl' disabled/>
                        </p>
                        <p>Número de item: <input type='text' name='quantity' value={quantity}  onChange={(e) => setQuantity(e.target.value)}
                             className='p-1 sm:text-xl' />
                        </p>  
                        <input type='text' name='price' value={price} onChange={(e) => setPrice(price = e.target.value)}
                             className='p-1 sm:text-xl' disabled/>            
                        <p>Total: R$ {price * quantity}</p>
                       
                        </div>
                        <div className="basis-1/3 pt-4">
                            <h1 className='text-2xl'>Endereço de entrega</h1>
                            <p><b>Nome do cliente</b>:  </p>
                            <p><b>Status do pedido:</b> Em andamento </p>
                            <p><b>Endereço de entrega:</b> Rua Rainha das missões 14, apt 06 </p>
                        </div>   
                         <hr className='bg-slate-800'/>         
                    </div>
                
                
                <div className='grid grid-cols-3 gap-4 place-items-center h-56'>
                <button
                    className="bg-orange-700  text-white active:bg-orange-500 font-bold uppercase text-sm px-10 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"  onClick={(e) => handleForm(e)} >                 
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
