import React, { useState } from 'react'
import pizza7 from '../assets/img/destaques/pizza-4.jpg'



export default function CarrinhoPage (){
  const [showModal, setShowModal] = React.useState(false);
  const [count, setCount] =  useState(0);
  const[title, setTitle] = useState("Calabresa com cebola");
  const[price, setPrice] = useState("39.99")

   function addCount () {
    setCount(count + 1);
      console.log(count);
  } 
   

  function subtractCount() {
    setCount(count > 0 ? count - 1: count);
    console.log(count);
  }

  function addPedido(){

    if(price > 0){
        return  (price * count).toFixed(2)         
    } else{
      return setPrice(price)
    }
  }
  function modalPage(){
    setShowModal(false)
  }


  return (
    <>
    

  <button type="button" className="text-orange-600 hover:text-white border border-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400
                         dark:focus:ring-yellow-900" onClick={() => setShowModal(true)} >Pedir agora</button>
   {showModal ? (
    <>

      <div
        className="justify-end flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                  Calabresa
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
           
          
            <div className="flex gap-2 p-6 flex-auto items-start flex-nwrap">
              <div className="flex "> <img src ={pizza7} /></div>
              <div className=" text-start">
                <span className='text-2xl text-gray-950'>{title}</span>
              <p>Escolha seu sabor Dá um Hut preferido e por +R$10 leve 2 refris lata ou por +R$15 leve 2 Heineken long neck.</p>
              
            
              <span className='text-2xl text-gray-950'>R$ {price}</span>
               </div>
            </div>
        
            <div className="flex justify-around  grid-cols-2 gap-6 p-6 border-t border-solid border-blueGray-200 rounded-b">
            <div className="flex items-start">
           
        
              <button type="button"  onClick={() => setCount(subtractCount)} className="text-white bg-orange-600 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg viewBox="0 0 1024 1024" fill="currentColor" height="2em"  width="2em"              >
                <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
              </svg>
            </button>
            
        
              <span className='text-center text-lg'> {count} &nbsp;</span>

              <button type="button" onClick={addCount} className="text-white bg-orange-600 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg viewBox="0 0 1024 1024" fill="currentColor" height="2em" width="2em">
                      <defs>
                        <style />
                      </defs>
                <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
                <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
               </svg>
              </button>        
            </div>                   
              <div className="flex">
                  <button
                    className="text-orange-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" onClick={() => setShowModal(false)} >                  
                    Cancelar
                  </button>
                  
                 
                  <button
                    className="bg-orange-700 text-white active:bg-orange-500 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"  onClick={() => setShowModal(false)} >                 
                    Adicionar R$  { addPedido()}             
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : null}
</>
);
}





